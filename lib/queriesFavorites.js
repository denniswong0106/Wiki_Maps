const db = require('./db');

const addFavorite = (user_id, map_id) => {

  const queryString = `
  INSERT INTO favorites (user_id, map_id) VALUES ($1, $2);`;

  const queryParams =[user_id, map_id];

  return db.query(queryString, queryParams)
    .then((response) => {
      return Promise.resolve(user_id);
    });
};

const removeFavorite = (user_id, map_id) => {

  const queryString = `
  DELETE FROM favorites WHERE user_id = $1 AND map_id = $2;`;

  const queryParams =[user_id, map_id];

  return db.query(queryString, queryParams)
    .then((response) => {
      return Promise.resolve(user_id);
    });
};

const getFavoriteIfExist = (user_id, map_id) => {

  const queryString = `
  SELECT id FROM favorites WHERE user_id = $1 AND map_id = $2;`

  const queryParams = [user_id, map_id];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows[0]; //returns empty if false
    });
};

module.exports = {
  addFavorite,
  removeFavorite,
  getFavoriteIfExist
};
