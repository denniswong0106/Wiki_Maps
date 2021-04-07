const express = require('express');
const router  = express.Router();
const { getMapById, deleteMap, editMapById } = require('../lib/queriesMaps');
const { getUserById, getUserFavorite } = require('../lib/queriesUsers');
const { getAllPinsForMapId } = require('../lib/queriesPins');

// /GET/maps/new
router.get('/new', (req, res) => {
  const id = req.session.user_id

  getUserById(id)
    .then((user) => {
      const templateVars = {
        user: user
      }
      console.log('templateVars /maps/new/: ', templateVars);
      return res.render('maps_new', templateVars);
    });
});

// add get all pins
// /GET/maps/:id
router.get('/:id', (req, res) => {
  const templateVars = {};

  getMapById(req.params.id)
    .then((map) => {
      templateVars.map = map;

      return getUserById(req.session.user_id);
    })
    .then((user) => {
      templateVars.user = user

      return getUserFavorite(req.session.user_id);
    })
    .then((userFavorites) => {
      templateVars.favorites = userFavorites;

      return getAllPinsForMapId(req.params.id);
    })
    .then((pins) => {
      templateVars.pins = pins;

      console.log('templateVars maps/:id/: ', templateVars);
      return res.render('maps_show', templateVars);
    });
  });


// /POST/maps/:id/edit
router.get('/:id/edit', (req, res) => {
  const templateVars = {};

  getMapById(req.params.id)
    .then((map) => {
      templateVars.map = map;

      return getUserById(req.session.user_id);
    })
    .then((user) => {
      templateVars.user = user

      console.log('templateVars maps/:id/edit/: ', templateVars);
      return res.render('maps_edit', templateVars);
    });
});

// /POST/maps/:id/edit
router.post('/:id/edit', (req, res) => {
  const obj = {
    title: req.body.newMapTitle,
    description: req.body.newMapDescription,
    thumbnail_img: req.body.newMapImg,
    city: req.body.newMapCity,
    id: req.params.id
  }

  editMapById(obj)
    .then((result) => {
      res.redirect('/');
    });
});

// /POST/maps/new  add map route
router.post('/new', (req, res) => {

});

// /POST/maps/:id/delete
router.post('/:id/delete', (req, res) => {
  deleteMap(req.params.id, req.session.user_id)
    .then((result) => {
      res.redirect('/');
    });
});

module.exports = router;
