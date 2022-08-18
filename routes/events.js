const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/events', (req, res) => {
  db.getEvents()
    .then((events) => {
      console.log(events)
      res.render('events', { event: events })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/event/:id', (req, res) => {
  db.getEventbyId(req.params.id)
    .then((event) => {
      console.log(event)
      res.render('event', event)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
