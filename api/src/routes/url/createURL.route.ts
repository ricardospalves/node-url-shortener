import { FastifyInstance } from 'fastify'
import { z as zod } from 'zod'
import { sql } from '../../lib/postgres'
import { PostgresError } from 'postgres'
import { randomString } from '../../utils/randomString'

const schema = zod.object({
  url: zod.string().url(),
})

export const createURL = async (app: FastifyInstance) => {
  return app.post('/short-url', async (request, reply) => {
    const { url } = schema.parse(request.body)
    const code = randomString(10)

    try {
      const results = await sql`
        INSERT INTO short_urls (code, original_url)
        VALUES (${code}, ${url})
        RETURNING id, code
      `
      const shortUrl = results[0]

      return reply.status(201).send({
        id: shortUrl.id,
        shortUrl: `http://localhost:3333/${shortUrl.code}`,
      })
    } catch (error) {
      if (error instanceof PostgresError) {
        if (error.code === '23505') {
          return reply.status(400).send({
            message: 'Duplicated code.',
          })
        }
      }

      console.log(error)

      return reply.status(500).send({
        message: 'Internal error.',
      })
    }
  })
}
