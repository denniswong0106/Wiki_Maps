const faker = require('faker');
const {generateUniqueNums, randomNum} = require('../seedHelperFunctions.js');

exports.seed = async (knex) => {

  let fakeFavorites = [];
  const numOfUsers = 1000;
  for (let i = 0; i < numOfUsers; i++) {

    let randUniquemapIds = generateUniqueNums(randomNum(5), 200);
    //Create an array of 1 to 5 random unique map ID's, max ID value is 200;

    const createFavorites = (id) => ({
      user_id: i+1,
      map_id: id
    });

    for (let j = 0; j < randUniquemapIds.length; j++) {
      let uniqueId = randUniquemapIds[j];
      fakeFavorites.push(createFavorites(uniqueId));
    }

  }
  await knex('favorites').insert(fakeFavorites);
};
