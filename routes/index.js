const express = require('express')
const route = express.Router()
const apiRouter = require("./api")

route.use("/user", apiRouter)

module.exports = route;