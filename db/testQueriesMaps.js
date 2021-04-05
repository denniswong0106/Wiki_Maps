const db = require('./testDB');

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

module.exports = {

  getMaps,
  getMapById

};
