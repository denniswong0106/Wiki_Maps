const express = require('express');
const router  = express.Router();

router.get('/on', (req, res) => {

  req.session.light = 'on';
  res.redirect('/');

});

router.get('/off', (req, res) => {

  req.session.light = null;
  res.redirect('/');

});

module.exports = router;
