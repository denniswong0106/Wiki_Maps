const db = require('./db');

// gets all maps with a limit of of given number, or defaults to 20;
const getMaps = (limit = 20) => {
  return db.query('SELECT * FROM maps LIMIT $1', [limit])
    .then((response) => {
      return response.rows;
    });
};

// get map when given specific id
const getMapById = (id) => {
  return db.query('SELECT * FROM maps WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

const editMapById = (mapObj) => {

  const queryString = `
  UPDATE maps
  SET
    title = $1,
    description = $2,
    thumbnail_img = $3,
    city = $4
  WHERE id = $5;`;

  const queryParams = [
    mapObj.title,
    mapObj.description,
    mapObj.thumbnail_img,
    mapObj.city,
    mapObj.id
  ];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows;
    })
};



// const addMap = () => {


//   return db.query(queryString, queryParams)
//     .then((response) => {
//       return response.rows[0]
//     })
// }

module.exports = {

  getMaps,
  getMapById,
  editMapById
  // addMap

};
