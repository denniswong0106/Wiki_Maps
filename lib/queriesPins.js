const db = require('./db');

// Takes in a map_id, returns an array of Pin Objects for the given map
const getAllPinsForMapId = (mapId) => {
  return db.query('SELECT * FROM pins WHERE map_id = $1', [mapId])
    .then((response) => {
      return response.rows;
    });
};

// Get pin info Object for a given id
const getPinById = (id) => {

  const queryString = `SELECT * from pins WHERE id = $1`;
  const queryParams = [id];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows[0];
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

const deletePin = (id, user_id) => {
  return db.query('DELETE FROM pins WHERE id = $1 AND user_id = $2', [id, user_id])
    .then((response) => {
      return response.rows[0];
    });
};

// takes in a pinObj, and edit the pin. Returns the new pinObj
const editPin = (pinObj) => {

  const queryString = `
  UPDATE maps
  SET
    longitude = $1,
    latitude = $2,
    title = $3,
    description = $4,
    pin_img = $5,
  WHERE id = $6;`;

  const queryParams = [
    pinObj.longitude,
    pinObj.latitude,
    pinObj.title,
    pinObj.description,
    pinObj.pin_img,
    pinObj.id
  ];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows[0];
    })
}

module.exports = {

  getAllPinsForMapId,
  addPin,
  deletePin,
  getPinById,
  editPin

};
