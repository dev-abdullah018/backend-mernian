const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World dddd ss')
})

const port = process.env.PORT || 8000

app.listen(port)