require('dotenv').config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString = process.env.DATABASE_URL
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds"
      // if generating demo data:
      // directory: __dirname + "/db/seeds-demo"
    }
  }
};
