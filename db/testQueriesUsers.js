const db = require('./testDB');

const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE name = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

const getUserFavorite = (id) => {
  return db.query(`
    SELECT maps.*
    FROM favorites
    JOIN users ON user_id = users.id
    JOIN maps ON map_id = maps.id
    WHERE users.id = $1
    LIMIT 10;
    `, [id])
    .then((response) => {
      return response.rows;
    });
};

const addUserFavorite = (id, map_id) => {
  return db.query(`
    INSERT INTO favorites(user_id, map_id)
    VALUES ($1, $2);
    `, [id, map_id])
};

module.exports = {

  getUserById,
  getUserFavorite,
  addUserFavorite

};
