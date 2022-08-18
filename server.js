const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

const userRoutes = require('./routes/events')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'public')))

// Routes
server.use('/', userRoutes)

server.get('/', (req, res) => {
  res.render('home')
})


module.exports = server
