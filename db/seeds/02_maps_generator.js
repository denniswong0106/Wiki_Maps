const faker = require('faker');

const randomId = () => {
  return Math.floor(Math.random() * 1000)
}

const createFakeMap = () => ({
  contributor_id: randomId(),
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  thumbnail_img: faker.image.city()
});

exports.seed = async (knex) => {
  let fakeMap = [];
  const desiredFakeMap = 200;
  for (let i = 0; i < desiredFakeMap; i++) {
    fakeMap.push(createFakeMap());
  }
  await knex('maps').insert(fakeMap);
};
