const db = require('./testDB');

const getProducts = () => {
  return db.query('SELECT * FROM widgets;')
    .then((response) => {
      return response.rows;
    });
};

const getProductById = (id) => {
  return db.query('SELECT * FROM widgets WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getProducts,
  getProductById
};
