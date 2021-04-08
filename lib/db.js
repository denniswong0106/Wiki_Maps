// PG database client/connection setup
const pg = require('pg');
const Client = pg.Client;

let config = {};
// If connected to Heroku Database:
if (process.env.DATABASE_URL) {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
  }
} else {
  config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

const client = new Client(config);

client.connect(() => {
  console.log('connected to database');
});

module.exports = client;
