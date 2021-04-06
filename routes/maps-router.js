const express = require('express');
const router  = express.Router();
const { getMapById } = require('../lib/queriesMaps');
const { getUserById, getUserFavorite } = require('../lib/queriesUsers');
// const { route } = require('./users-router');

// /GET/maps
// router.get('/', (req, res) => {
//   getMaps()
//     .then((maps) => {
//       const templateVars = {
//         maps: maps.rows
//       }
//       console.log('templateVars getMaps: ', templateVars);
//       return res.render('index', templateVars);
//     });
// });

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


// /POST/maps/new  add map route
router.post('/new', (req, res) => {

});

// /POST/maps/:id/delete
router.post('/:id/delete', (req, res) => {

});

// pins edit, delete, add, get all pins
// post map edit

module.exports = router;
