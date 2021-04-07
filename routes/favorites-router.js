const express = require('express');
const router  = express.Router();
const {  addFavorite, removeFavorite, getFavoriteIfExist } = require('../lib/queriesFavorites');

// pins edit, delete, add, get all pins

router.post('/add', (req, res) => {
  const templateVars = {};

  favoriteObj = req.body;

  addFavorite(favoriteObj)
    .then(result => {
      console.log('successfully added to favorites:', result);
      res.send()
    })
    .catch(err => {
      console.log(err)
      res.statusCode(400).end('Error, unable to add to favorites')
    })


});

module.exports = router;

