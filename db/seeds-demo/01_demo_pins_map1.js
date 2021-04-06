
exports.seed = async (knex) => {

  let fakePins = [];
  for (let i = 0; i < 100; i++) {

    const createPins = () => ({
      longitude: 49 + (Math.random() * 2) - 1,
      latitude: -126 + (Math.random() * 2) - 1,
      title: 'Good spot for rain',
      description: 'Saw lots of rain here!',
      pin_img: 'rain.img',
      user_id: 1,
      map_id: 1
    });

    fakePins.push(createPins());
  }
  await knex('pins').insert(fakePins);
};

