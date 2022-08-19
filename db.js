const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAlllocations,
  getEvents,
  getEventbyId,
  updateEvent,
  addEvent,
  deleteEvent,
}

function getEvents(db = connection) {
  return db('events')
  .join('locations','events.location_id','locations.id')
  .select('*','events.name AS event_name', 'events.id AS event_id',  'locations.id AS location_id', 'locations.name AS location_name')
}


function getEventbyId(id, db = connection){
  return db('events')
  .join('locations','events.location_id','locations.id')
  .select('*','events.name AS event_name', 'events.id AS event_id','locations.id AS location_id', 'locations.name AS location_name')
  .where('events.id', id)
  .first()
}

function getAlllocations(db = connection) {
  return db('locations')
  .select()
}

function updateEvent(id, eventTitle, eventDate, locationId,eventDescription, db = connection){
  return db('events')
  .update({
    name: eventTitle,
    location_id: locationId,
    date: eventDate,
    description: eventDescription
   })
  .where('events.id', id)
}

function addEvent(eventTitle, eventDate, locationId, eventDescription, eventPrice, eventType,db = connection){
  return db('events')
  .insert({
    name: eventTitle,
    location_id: locationId,
    date: eventDate,
    description: eventDescription,
    price: eventPrice,
    type:eventType, 
  })
}

function deleteEvent(id, db = connection){
  return db('events')
  .where('events.id', id)
  .delete()
}
