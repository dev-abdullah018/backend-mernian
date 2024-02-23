const express = require('express')
const route = express.Router()

route.get("/auth", function (req, res) {
  res.send('Hello World auth')
})

module.exports = route;