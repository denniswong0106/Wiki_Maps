const express = require('express');
const router  = express.Router();
const { getUserById, getUserFavorite, addUserFavorite } = require('../lib/queriesUsers');
const { getMaps, getMapById, getContributedByUser } = require('../lib/queriesMaps');

//  /GET/users/:id
router.get('/:id', (req, res) => {
  const templateVars = {};
  getUserById(req.params.id)
    .then((user) => {
      templateVars.user = user;

      return getUserFavorite(req.params.id);
    })
    .then((userFavorite) => {
      templateVars.userFavourite = userFavorite;

      return getContributedByUser(req.params.id)
    })
    .then((contributions) => {
      templateVars.contributions = contributions

      console.log('templateVars users/:id/: ', templateVars);
      return res.render('profile_show', templateVars);
    });

});

//  /GET/users/login/:id    generates cookies
router.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  getUserById(req.params.id)
    .then((user) => {
      return res.redirect('/');
    })
});

// /POST/users/logout    deletes cookie session
router.post('/logout', (req, res) => {
  req.session.user_id = null;
  res.redirect('/');
});

// /POST/users/:id    adds favourites
router.post('/users/:id/:map_id', (req, res) => {
  addUserFavorite(req.params.id, req.params.map_id);
});

module.exports = router;
