import { FastifyInstance } from 'fastify'
import { z as zod } from 'zod'
import { sql } from '../../lib/postgres'
import { redis } from '../../lib/redis'

const schema = zod.object({
  code: zod.string().min(3),
})

export const redirectURL = async (app: FastifyInstance) => {
  return app.get('/:code', async (request, reply) => {
    const { code } = schema.parse(request.params)
    const result = await sql`
      SELECT id, original_url
      FROM short_urls
      WHERE short_urls.code=${code}
    `

    if (result.length === 0) {
      return reply.status(404).send({
        message: 'URL not found.',
      })
    }

    const url = result[0]

    await redis.zIncrBy('metrics', 1, String(url.id))

    return reply.redirect(301, url.original_url)
  })
}
