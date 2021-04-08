const express = require('express');
const router  = express.Router();
const { addPin, deletePin, editPin } = require('../lib/queriesPins');

// /POST/pins/add
router.post('/add', (req, res) => {

  console.log('ADD PIN INFO SENT TO PIN ROUTER:', req.body);

  const pinObj = {
    longitude: req.body.newLng,
    latitude: req.body.newLat,
    title: req.body.newTitle,
    description: req.body.newDescription,
    pin_img: req.body.newPinImg,
    user_id: req.body.userID,
    map_id: req.body.mapId
  };

  console.log(pinObj);

  addPin(pinObj)
    .then((result) => {
      console.log('able to finish addpin query successfully')
      res.redirect(`/users/${req.session.user_id}`);
    }).catch(err => {
      console.log('Error occured');
      console.log(err);
    });
});

// /POST/pins/:id/edit
router.post('/:id/edit', (req, res) => {
  const pinObj = {
    title: req.body.newTitle,
    description: req.body.newDescription,
    pin_img: req.body.newPinImg,
    id: req.params.id,
    user_id: req.session.user_id
  };
  editPin(pinObj)
    .then((result) => {
      res.redirect('back');
    }).catch(err => {
      console.log('Error occured');
      console.log(err);
    });
});

// /POST/pins/:id/delete
router.post('/:id/delete', (req, res) => {
  deletePin(req.params.id, req.session.user_id)
    .then((result) => {
      res.redirect(`/users/${req.session.user_id}`);
    }).catch(err => {
      console.log('Error occured');
      console.log(err);
    });
});

module.exports = router;
