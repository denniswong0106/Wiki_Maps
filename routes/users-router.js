const express = require('express');
const router  = express.Router();
const { getUserById, getUserFavorite } = require('../db/testQueriesUsers');

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
  res.redirect('/');
});

// /GET/users/logout    deletes cookie session
router.post("/logout", (req, res) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
