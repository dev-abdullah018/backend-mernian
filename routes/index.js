const express = require('express')
const route = express.Router()

route.get(process.env.API_URL, function (req, res) {
  res.send('Hello World api')
})

module.exports = route;