// Variables for the fake data generation. Alter here, then
// recreate tables before running seed function again

module.exports = {
  numOfUsers: 200,
  numOfMaps: 50,
  maxNumPinsPerMap: 10,
  maxNumOfFavMapIdsPerUser: 5,
 };
// Try to stay roughly with the equation below:

// numOfMaps = numOfusers /4
// maxNumPinsPerMap = numOfMaps / 5
// maxNumOfFavMapIdsPerUser = maxNumPinsPerMap / 2


