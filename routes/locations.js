const express = require('express')

const db = require('../db')

const router = express.Router()
//.../locations
router.get('/locations', (req, res) => {
  db.getAlllocations()
    .then((locations) => {
    
    const viewData = {locations}
    console.log(viewData)
    res.render('locations', viewData )
    })
  })

router.get('/location/add', (req, res) =>{
  res.render ('addLocation')
})

router.get('/add', (req, res) => {
  res.render('addLocation')
})

router.post('/location/add', (req, res) => {
  const { name, description} = req.body

  db.addLocation(name, description)
  .then(() => {
    res.redirect('/locations')
  })
}) 

module.exports = router


