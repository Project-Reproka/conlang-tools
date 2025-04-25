require('dotenv').config()

const express = require('express')
const next = require('next')
const http = require('http')
const https = require('https')
const fs = require('fs')

const dev = process.env.NODE_ENV != 'production'
const port = (dev ? 3000 : 443)
const app = next({ dev })
const handle = app.getRequestHandler()

// api stuff here

app.prepare().then(() => {
  const expapp = express()

  expapp.use(express.json({ limit: '10mb' }))

  expapp.disable('X-Powered-By')
  
  // api stuff here

  expapp.get('*', (req, res) => {
    return handle(req, res)
  })

  var server = null

  if (dev) {
    server = http.createServer(expapp)
  } else {
    server = https.createServer({
      key: fs.readFileSync('../ssl/privkey.pem'),
      cert: fs.readFileSync('../ssl/fullchain.pem')
    }, expapp)
  }

  server.listen(port, (err) => {
    if (err) throw err

    console.log('> Ready on localhost:' + port)
  })
})

if (!dev) {
  var redirectapp = express()

  redirectapp.get('*', (req, res) => {
    var host = req.get('Host')
    
    res.redirect(['https://', host, req.url].join(''))
  })

  redirectapp.listen(80, (err) => {
    if (err) throw err

    console.log('> HTTP Redirect ready on localhost:80')
  })
}
