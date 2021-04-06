const db = require('./db');

// Takes in a map_id, returns an array of Pin Objects for the given map
const getAllPinsForMapId = (mapId) => {
  return db.query('SELECT * FROM pins WHERE map_id = $1', [mapId])
    .then((response) => {
      return response.rows;
    });
};

// Takes in a pin Object with all the pin data, adds to the database;
const addPin = (pinObj) => {

  const queryString = `
  INSERT INTO pins (
    longitude,
    latitude,
    title,
    description,
    pin_img
    ) VALUES ($1,$2,$3,$4,$5)`;

  const queryParams = [
    pinObj.longitude,
    pinObj.latitude,
    pinObj.title,
    pinObj.description,
    pinObj.pin_img
  ];

  return db.query(queryString, queryParams)
    .then((response) => {
      return 'successfully added pin onto map';
    })
    .catch((err) => {
      return 'unable to add pin onto map';
    });
};

const deletePin = (map_id, user_id) => {
  return db.query('DELETE FROM pins WHERE map_id = $1 AND user_id = $2', [map_id, user_id])
    .then((response) => {
      return response.rows[0];
    });
};

// const editPin = (mapObj) => {

//   const queryString = `
//   UPDATE maps
//   SET
//     title = $1,
//     description = $2,
//     thumbnail_img = $3,
//     city = $4
//   WHERE id = $5;`;

//   const queryParams = [
//     mapObj.title,
//     mapObj.description,
//     mapObj.thumbnail_img,
//     mapObj.city,
//     mapObj.id
//   ];

//   return db.query(queryString, queryParams)
//     .then((response) => {
//       return response.rows;
//     })
// }

module.exports = {

  getAllPinsForMapId,
  addPin,
  deletePin
  // editPin

};
