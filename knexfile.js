require('dotenv').config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  }
};

