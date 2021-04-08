require('dotenv').config();

let connectionInfo = {};

if (process.env.DATABASE_URL) {
  connectionInfo = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  }
} else {
  connectionInfo = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  }
};

module.exports = {
  development: {
    client: "postgresql",
    connection: connectionInfo,
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
