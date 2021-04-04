const faker = require('faker');

const desiredFakeUsers = process.argv[3] || 20000;
const batchSize = 50000;

const createFakeUser = () => ({
  first_name: faker.name.firstName() + faker.name.lastName(),
  email: faker.internet.email(),
  city: faker.address.city(),
  profile_pic: faker.image.avatar()
});

exports.seed = async (knex) => {
  let fakeUsers = [];
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
    if (fakeUsers.length >= batchSize) {
      await knex('users').insert(fakeUsers);
      fakeUsers = [];
    }
  }
  return knex('users').insert(fakeUsers);
};
