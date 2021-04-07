const express = require('express');
const router  = express.Router();
const {  addFavorite, deleteFavorite, getFavoriteIfExist } = require('../lib/queriesFavorites');


// Add favorite to database
router.post('/add', (req, res) => {

  const user_id = req.session.user_id;
  console.log('user_id:', user_id)
  const favoriteObj = req.body;
  favoriteObj.user_id = user_id;
  console.log('favoriteObj:', favoriteObj);

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

// delete favorite from database
router.post('/delete', (req, res) => {

  const user_id = req.session.user_id;
  console.log('user_id:', user_id)
  const favoriteObj = req.body;
  favoriteObj.user_id = user_id;
  console.log('favoriteObj:', favoriteObj);

  deleteFavorite(favoriteObj)
    .then(result => {
      console.log('successfully deleted to favorites:', result);
      res.send()
    })
    .catch(err => {
      console.log(err)
      res.statusCode(400).end('Error, unable to delete from favorites')
    })


});

module.exports = router;

