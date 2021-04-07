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
      return response.rows[0];
    })
};


// Takes in map obj and inserts into the SQL database

const addMap = (mapObj) => {

  const queryString = `
  INSERT INTO maps (contributor_id, title, description, thumbnail_img, city)
  VALUES ($1,$2,$3,$4,$5)`;

  const queryParams = [
    mapObj.contributor_id,
    mapObj.title,
    mapObj.description,
    mapObj.thumbnail_img,
    mapObj.city
  ];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows[0]
    })
};

// delete map when given map_id and contributor id;
// Note: In a real app that this delete function can only be called by verified
// user

const deleteMap = (map_id, contributor_id) => {
  const queryString = `
  DELETE FROM maps WHERE maps.id = $1 AND contributor_id = $2`;

  const queryParams = [map_id, contributor_id];

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows[0]
    })
};

const getContributedByUser = (id) => {
  return db.query(`
    SELECT *
    FROM maps
    JOIN users ON contributor_id = users.id
    WHERE users.id = $1
    LIMIT 10;
    `, [id])
      .then((maps) => {
        return maps.rows;
      });

}

module.exports = {

  getMaps,
  getMapById,
  editMapById,
  getContributedByUser,
  addMap,
  deleteMap
};
