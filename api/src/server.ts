import { app } from './app'

const PORT = 3333

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`🚀 server running on http://localhost:${PORT}`)
  })
