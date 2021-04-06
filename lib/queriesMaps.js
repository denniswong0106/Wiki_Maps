const db = require('./db');

const getMaps = () => {
  return db.query('SELECT * FROM maps LIMIT 10;')
    .then((response) => {
      return response.rows;
    });
};

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
}

module.exports = {

  getMaps,
  getMapById,
  editMapById

};
