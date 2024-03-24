import { FastifyInstance } from 'fastify'
import { z as zod } from 'zod'
import { sql } from '../../lib/postgres'

const schema = zod.object({
  code: zod.string().min(3),
})

export const redirectURL = async (app: FastifyInstance) => {
  return app.get('/:code', async (request, reply) => {
    const { code } = schema.parse(request.params)
    const result = await sql`
      SELECT original_url
      FROM short_urls
      WHERE short_urls.code=${code}
    `

    if (result.length === 0) {
      return reply.status(404).send({
        message: 'URL not found.',
      })
    }

    const url = result[0]

    return reply.redirect(301, url.original_url)
  })
}
