const express = require('express');
const router  = express.Router();
const { addPin, deletePin, editPin } = require('../lib/queriesPins');

// /POST/pins/add
router.post('/add', (req, res) => {
  const pinObj = {
    longitude: req.body.newLng,
    latitude: req.body.newLat,
    title: req.body.newTitle,
    description: req.body.newDescription,
    pin_img: req.body.newPinImg,
  };
  addPin(pinObj)
    .then((result) => {
      res.redirect(`/users/${req.session.user_id}`);
    }).catch(err => {
      console.log('Error occured');
      console.log(err);
    });
});

// /POST/pins/:id/edit
router.post('/:id/edit', (req, res) => {
  const pinObj = {
    longitude: req.body.newLng,
    latitude: req.body.newLat,
    title: req.body.newTitle,
    description: req.body.newDescription,
    pin_img: req.body.newPinImg,
    id: req.params.id
  };
  editPin(pinObj)
    .then((result) => {
      res.redirect('/pins/:id');
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
