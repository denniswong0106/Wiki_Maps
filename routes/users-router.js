const express = require('express');
const router  = express.Router();
const { getUserById, getUserFavorite, addUserFavorite } = require('../lib/queriesUsers');

//  /GET/users/:id
router.get('/:id', (req, res) => {
  const templateVars = {};
  getUserById(req.params.id)
    .then((user) => {
      templateVars.user = user;

      return getUserFavorite(req.params.id)
    })
    .then((userFavorite) => {
      templateVars.userFavourite = userFavorite;

      return res.render('profile_show', templateVars);
    });

});

//  /GET/users/login/:id    generates cookies
router.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  return res.redirect('/');
});

// /POST/users/logout    deletes cookie session
router.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

// /POST/users/:id    adds favourites
router.post('/users/:id/:map_id', (req, res) => {
  addUserFavorite(req.params.id, req.params.map_id);
});

module.exports = router;
