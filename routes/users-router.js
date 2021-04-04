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
      console.log('templateVars: ', templateVars);
      res.render('profile_show', templateVars);
    });
});



module.exports = router;
