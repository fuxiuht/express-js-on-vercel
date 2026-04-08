import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static files from /public
app.use(express.static(path.join(__dirname, '../public')))

app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app

// Local dev server
if (process.argv[1] && process.argv[1].endsWith('index.ts')) {
  app.listen(3000, () => console.log('http://localhost:3000'))
}
