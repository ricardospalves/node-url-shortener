import fastify from 'fastify'
import { createURL } from './routes/url'

const app = fastify()

app.register(createURL)

export { app }
