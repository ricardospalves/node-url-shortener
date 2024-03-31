import { FastifyInstance } from 'fastify'
import { z as zod } from 'zod'
import { sql } from '../../lib/postgres'
import { randomString } from '../../utils/randomString'
import { createShortURL } from '../../utils/createShortURL'

const schema = zod.object({
  url: zod.string().url(),
})

export const createURL = async (app: FastifyInstance) => {
  return app.post('/short-url', async (request, reply) => {
    try {
      const { url } = schema.parse(request.body)
      const code = randomString(10)

      const resultsExist = await sql`
        SELECT id, code
        FROM short_urls
        WHERE short_urls.original_url=${url}
      `

      if (resultsExist[0]) {
        return reply.status(201).send({
          id: resultsExist[0].id,
          shortUrl: createShortURL(request, resultsExist[0].code),
        })
      }

      const results = await sql`
        INSERT INTO short_urls (code, original_url)
        VALUES (${code}, ${url})
        RETURNING id, code
      `
      const firstResult = results[0]

      return reply.status(201).send({
        id: firstResult.id,
        shortUrl: createShortURL(request, code),
      })
    } catch (error) {
      console.log(error)

      return reply.status(500).send({
        message: 'Internal error.',
      })
    }
  })
}
