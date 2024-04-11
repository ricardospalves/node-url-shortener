import { FastifyInstance } from 'fastify'
import { sql } from '../../lib/postgres'
import { createShortURL } from '../../utils/createShortURL'

type ShortURL = {
  id: number
  code: string
  original_url: string
  created_at: string
}

export const listURLs = async (app: FastifyInstance) => {
  return app.get('/short-url', async (request, reply) => {
    const results = await sql<ShortURL[]>`
      SELECT id, code, original_url, created_at
      FROM short_urls
      ORDER BY created_at DESC
    `
    const response = results.map(({ code, id, original_url }) => {
      return {
        id: id,
        shortURL: createShortURL(request, code),
        originalURL: original_url,
      }
    })

    return reply.status(200).send(response)
  })
}
