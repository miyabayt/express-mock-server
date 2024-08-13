import express from 'express'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const routesDir = path.join(__dirname, 'routes')

const setupRoutes = async (app) => {
  const routes = {}
  const files = fs.readdirSync(routesDir)

  await Promise.all(
    files.map(async (file) => {
      if (file.endsWith('.js')) {
        const routeModule = await import(path.join(routesDir, file))
        routeModule.default.forEach((route) => {
          app[route.method](route.path, route.handler)
        })
      }
    }),
  )
}

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
  // 共通ミドルウェアでレスポンスを50ms遅らせる
  setTimeout(() => {
    next()
  }, 50)
})
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

setupRoutes(app)

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
