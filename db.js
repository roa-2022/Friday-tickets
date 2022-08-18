const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getEvents,
  getEventbyId
}

function getEvents(db = connection) {
  return db('events')
  .join('locations','events.location_id','locations.id')
  .select('*','events.name AS event_name', 'locations.id AS location_id', 'locations.name AS location_name')
}

function getEventbyId(id, db = connection){
  return db('events')
  .join('locations','events.location_id','locations.id')
  .select('*','events.name AS event_name', 'locations.id AS location_id', 'locations.name AS location_name')
  .where('events.id', id)
  .first()
}