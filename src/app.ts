import fastify, { RegisterOptions } from 'fastify'
import { createURL, listURLs } from './routes/url'

const FASTIFY_REGISTER_OPTIONS: RegisterOptions = {
  prefix: '/api',
}

const app = fastify()

app.register(createURL, FASTIFY_REGISTER_OPTIONS)
app.register(listURLs, FASTIFY_REGISTER_OPTIONS)

export { app }
