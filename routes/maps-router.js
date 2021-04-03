const express = require('express');
const router  = express.Router();

//  /GET/maps
router.get('/', (res, req) => {
  res.send('maps');
});

// /GET/maps/:id
router.get('/:id', (res, req) => {
  res.send(`maps ${req.params.id}`);
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

return router;





module.exports = testMaps;
