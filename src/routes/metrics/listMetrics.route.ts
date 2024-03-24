import { FastifyInstance } from 'fastify'
import { redis } from '../../lib/redis'

export const listMetrics = async (app: FastifyInstance) => {
  return app.get('/metrics', async () => {
    const metrics = (
      await redis.zRangeByScoreWithScores('metrics', 0, 50)
    ).reverse()

    return metrics.map(({ score, value }) => {
      return {
        shortURL: value,
        visits: score,
      }
    })
  })
}
