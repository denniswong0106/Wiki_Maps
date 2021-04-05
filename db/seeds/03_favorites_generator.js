const faker = require('faker');
const { generateUniqueNums, randomNum } = require('../seedHelperFunctions.js');
const { numOfUsers, numOfMaps, maxNumOfFavMapIdsPerUser } = require('../seedVariables.js');

exports.seed = async (knex) => {

  let fakeFavorites = [];
  for (let i = 0; i < numOfUsers; i++) {

    let randUniquemapIds = generateUniqueNums(randomNum(maxNumOfFavMapIdsPerUser), numOfMaps);
    //Create an array of 1 to 5 random unique map ID's, max ID values is the num of maps, which is num of user / 4;

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
