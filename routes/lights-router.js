const express = require('express');
const router  = express.Router();

router.get('/on', (req, res) => {

  req.session.light = 'on';

});

router.get('/off', (req, res) => {

  req.session.light = null;

});

module.exports = router;
