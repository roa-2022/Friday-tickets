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

router.get('/event/:id/edit', (req, res) => {
  db.getEventbyId(req.params.id)
    .then((event) => {
      console.log(event)
      res.render('eventEdit', event)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/event/:id/edit', (req, res) => {
    const  { eventTitle, eventDate, locationId,eventDescription } = req.body
    const id = req.params.id
    console.log(eventTitle, eventDate, locationId,eventDescription)
    return db.updateEvent(id, eventTitle, eventDate, locationId,eventDescription)
    .then(() => {
      res.redirect('/events') 
    })
    .catch (err => res.send(err.message))
  
  })
module.exports = router
