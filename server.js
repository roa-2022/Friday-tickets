const express = require('express')
const hbs = require('express-handlebars')

const locationRoutes = require('./routes/locations')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', locationRoutes)

module.exports = server
