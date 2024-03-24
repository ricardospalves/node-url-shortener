import fastify from 'fastify'
import { createURL, listURLs } from './routes/url'

const app = fastify()

app.register(createURL)
app.register(listURLs)

export { app }
