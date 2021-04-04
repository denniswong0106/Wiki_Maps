const express = require('express');
const router  = express.Router();
const {getUsers, getUserById} = require('../db/testQueriesUsers');

//  /GET/users/:id
router.get('/:id', (res, req) => {
  getUserById(req.params.id)
    .then((user) => {
      res.json(user);
    });
});

module.exports = router;
