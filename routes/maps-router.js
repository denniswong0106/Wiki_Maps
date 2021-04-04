const express = require('express');
const router  = express.Router();
const { getMaps, getMapById } = require('../db/testQueriesMaps');

//  /GET/maps
router.get('/', (req, res) => {
  getMaps()
    .then((maps) => {
      const templateVars = {
        maps: maps.rows
      }
      console.log('templateVars: ', templateVars);
      return res.render('index', templateVars);
    });
});

// /GET/maps/:id
router.get('/:id', (req, res) => {
  getMapById(req.params.id)
  const templateVars = {
    map: map
  }
  console.log('templateVars: ', templateVars);
  return res.render('maps_show', templateVars);
});

// /POST/maps/:id/edit
router.post('/:id/edit', (req, res) => {

});

// /POST/maps/  add map route
router.post('/', (req, res) => {

});

// /POST/maps/:id/delete
router.post('/:id/delete', (req, res) => {

});


module.exports = router;
