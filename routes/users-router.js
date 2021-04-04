const { text } = require('body-parser');
const { Template } = require('ejs');
const express = require('express');
const router  = express.Router();
const {getUsers, getUserById} = require('../db/testQueriesUsers');

//  /GET/users/:id
router.get('/:id', (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      const templateVars = {
        user: user
      }
      res.render('profile_show', templateVars);
    });
});

//  /GET/users/login/:id    generates cookies
router.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});


module.exports = router;
