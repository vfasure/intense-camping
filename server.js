const express = require('express')
const next = require('next')
const path = require('path')
const reserveApi = require('./api/reserve')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const nextApp = next({ dir: '.', dev })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare()
.then(() => {
  const server = express()

  // Priority serve any static files.
  server.use(express.static(path.resolve(__dirname, 'public')))

  // Handle API requests.
  server.post('/api/reserve', reserveApi)

  // Handle all other requests via Next
  server.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
