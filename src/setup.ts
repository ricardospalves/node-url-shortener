import { sql } from './lib/postgres'

const setup = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS url_shortner (
      id SERIAL PRIMARY KEY,
      code TEXT UNIQUE,
      original_url TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await sql.end()

  console.log('✅ Success setup!')
}

setup()
