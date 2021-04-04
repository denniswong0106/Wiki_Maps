const express = require('express');
const router  = express.Router();
const { getProducts, getProductById } = require('../db/testQueries');

//  /GET/maps
router.get('/', (req, res) => {
  getProducts()
    .then((products) => {
      res.json(products.rows);
    });
});

// /GET/maps/:id
router.get('/:id', (req, res) => {
  getProductById(req.params.id)
    .then((product) => {
      res.send(`maps ${req.params.id}`);
    });
});

// /POST/maps/:id/edit
router.post('/:id/edit', (req, res) => {

});

// /POST/maps/  add map route
router.post('/', (req, res) => {

});

// /POST/maps/:id/delete
router.post('/:id/delete', (req, res) => {

});


module.exports = router;
