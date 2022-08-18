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

module.exports = router


