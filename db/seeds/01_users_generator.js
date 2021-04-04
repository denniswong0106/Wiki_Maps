const faker = require('faker');


const createFakeUser = () => ({
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  city: faker.address.city(),
  profile_pic: faker.image.avatar()
});

exports.seed = async (knex) => {
  let fakeUsers = [];
  const desiredFakeUsers = 1000;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  await knex('users').insert(fakeUsers);
};



//   return knex('users').insert(fakeUsers);
// };
