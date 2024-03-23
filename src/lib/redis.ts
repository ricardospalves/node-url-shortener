import { createClient } from 'redis'

const redis = createClient({
  url: 'redis://:docker@localhost:6379',
})

redis.connect()

export { redis }
