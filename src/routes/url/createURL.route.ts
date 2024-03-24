import { FastifyInstance } from 'fastify'
import { z as zod } from 'zod'
import { sql } from '../../lib/postgres'
import { PostgresError } from 'postgres'

const schema = zod.object({
  code: zod.string().min(3),
  url: zod.string().url(),
})

export const createURL = (app: FastifyInstance) => {
  return app.post('/urls', async (request, reply) => {
    const { code, url } = schema.parse(request.body)

    try {
      const results = await sql`
        INSERT INTO short_urls (code, original_url)
        VALUES (${code}, ${url})
        RETURNING id
      `
      const shortUrl = results[0]

      return reply.status(201).send({
        shortUrlId: shortUrl.id,
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
