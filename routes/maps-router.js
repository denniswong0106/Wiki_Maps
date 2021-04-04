const express = require('express');
const router  = express.Router();
const {getProducts, getProductById} = require('../db/testQueries');

//  /GET/maps
router.get('/', (res, req) => {
  getProducts()
    .then((products) => {
      res.json(products.rows);
    });
});

// /GET/maps/:id
router.get('/:id', (res, req) => {
  getProductById(req.params.id)
    .then((product) => {
      res.send(`maps ${req.params.id}`);
    });
});

// /POST/maps/:id/edit
router.post('/:id/edit', (res, req) => {

});

// /POST/maps/  add map route
router.post('/', (res, req) => {

});

// /POST/maps/:id/delete
router.post('/:id/delete', (res, req) => {

});


module.exports = router;
