import fastify, { RegisterOptions } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { createURL, listURLs } from './routes/url'
import { redirectURL } from './routes/root'
import { listMetrics } from './routes/metrics'
import { errorHandler } from './errorHandler'

const FASTIFY_REGISTER_OPTIONS: RegisterOptions = {
  prefix: '/api',
}

const app = fastify()

app.register(fastifyCors, {
  origin: true,
  credentials: true,
})

// API
app.register(createURL, FASTIFY_REGISTER_OPTIONS)
app.register(listURLs, FASTIFY_REGISTER_OPTIONS)
app.register(listMetrics, FASTIFY_REGISTER_OPTIONS)

// REDIRECT
app.register(redirectURL)

app.setErrorHandler(errorHandler)

export { app }
