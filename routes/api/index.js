const express = require('express')
const route = express.Router()
const auth = require("./auth");

route.get("/auth", auth)

module.exports = route;