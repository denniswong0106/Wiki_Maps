// creates a random number with an upperlimit of 'num';
const randomNum = (num) => {
  return Math.floor((Math.random() * (num - 1)) + 1)
};

// function that creates an array of unique map_ids;
// numOfUniqueIds indicates number of unique Ids,
// uniqueIDupperlimit defines the highest possible id value generated
const generateUniqueNums = (numOfUniqueIds, uniqueIdUpperLimit) => {
  let arr = [];
  for (let i = 0; arr.length < numOfUniqueIds; i++) {
    let val = randomNum(uniqueIdUpperLimit)
    if (arr.indexOf(val) === -1) {
      arr.push(val);
    }
  }
  return arr;
};

// function that creates an array of a given number of Ids, with the
// value of the id not exceeding the idUpperLimit (inclusive)
const generateNonUniqueNums = (numOfIds, idUpperLimit) => {
  let arr = [];
  for (let i = 0; arr.length < numOfIds; i++) {
    arr.push(randomNum(idUpperLimit));
  }
  return arr;
};



module.exports = {generateUniqueNums, randomNum, generateNonUniqueNums};
