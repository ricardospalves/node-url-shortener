import fastify, { RegisterOptions } from 'fastify'
import { createURL, listURLs } from './routes/url'
import { redirectURL } from './routes/root'
import { listMetrics } from './routes/metrics'

const FASTIFY_REGISTER_OPTIONS: RegisterOptions = {
  prefix: '/api',
}

const app = fastify()

// API
app.register(createURL, FASTIFY_REGISTER_OPTIONS)
app.register(listURLs, FASTIFY_REGISTER_OPTIONS)
app.register(listMetrics, FASTIFY_REGISTER_OPTIONS)

// REDIRECT
app.register(redirectURL)

export { app }
