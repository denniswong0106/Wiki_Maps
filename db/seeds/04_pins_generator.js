const faker = require('faker');

const randomId = (num) => {
  return Math.floor(Math.random() * num)
};

const createPins = () => ({
  longitude: faker.address.longitude(),
  latitude: faker.address.latitude(),
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  pin_img: faker.image.sports(),
  user_id: randomId(1000),
  map_id: randomId(200)
});

exports.seed = async (knex) => {
  let fakePins = [];
  const desiredfakePins = 400;
  for (let i = 0; i < desiredfakePins; i++) {
    fakePins.push(createPins());
  }
  await knex('pins').insert(fakePins);
};
