import { FastifyInstance } from 'fastify'
import { sql } from '../../lib/postgres'

export const listURLs = async (app: FastifyInstance) => {
  return app.get('/short-url', async () => {
    const results = await sql`
      SELECT id, code, original_url, created_at
      FROM short_urls
      ORDER BY created_at DESC
    `

    return results
  })
}
