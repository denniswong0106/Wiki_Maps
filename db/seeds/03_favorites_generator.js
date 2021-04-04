const faker = require('faker');

const randomId = (num) => {
  return Math.floor(Math.random() * num)
}
const createFavorites = () => ({
  user_id: randomId(1000),
  map_id: randomId(200)
});

exports.seed = async (knex) => {
  let fakeFavorites = [];
  const desiredfakeFavorites = 400;
  for (let i = 0; i < desiredfakeFavorites; i++) {
    fakeFavorites.push(createFavorites());
  }
  await knex('favorites').insert(fakeFavorites);
};
