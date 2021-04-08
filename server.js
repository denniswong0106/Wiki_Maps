// load .env data into process.env
require('dotenv').config({silent: true});

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');
const { getMaps } = require('./lib/queriesMaps');
const { getUserById, getUserFavorite } = require('./lib/queriesUsers');
const { getFavoritesByUserId } = require('./lib/queriesFavorites');


// PG database client/connection setup
// const { Pool } = require('pg');
// const dbParams = require('./lib/db.js');
// const db = new Pool(dbParams);
// db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'userId',
  keys: ['key1', 'key2']
}))

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");
const mapsRouter = require('./routes/maps-router');
const usersRouter = require('./routes/users-router');
const pinsRouter = require('./routes/pins-router');
const favoritesRouter = require('./routes/favorites-router');
const lightsRouter = require('./routes/lights-router');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));

app.use("/maps", mapsRouter);
app.use("/users", usersRouter);
app.use("/pins", pinsRouter);
app.use("/favorites", favoritesRouter);
app.use("/lights", lightsRouter);

// Note: mount other resources here, using the same pattern above

// usually api/xxx is when we get a json back ie. an object.
// /xxx is when we just get other things back
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get('/', (req, res) => {
  const templateVars = { light: req.session.light };

  getMaps()
    .then((maps) => {
      templateVars.maps = maps;

      return getUserById(req.session.user_id);
    })
    .then((user) => {
      templateVars.user = user;

      return getUserFavorite(req.session.user_id);
    })
    .then((userFavorites) => {
      templateVars.favorites = userFavorites;

      return getFavoritesByUserId(req.session.user_id);
    })
    .then((mapIdsFavorites) => {
      templateVars.mapIdsFavorites = mapIdsFavorites;

      console.log('templateVars homepage: ', templateVars);
      return res.render('index', templateVars);
    });

});

app.get('*', (req, res) => {
  res.status(404).send('Error 404 Page not found.');
});

app.listen(PORT, () => {
  console.log(ENV)
  console.log(`Example app listening on port ${PORT}`);
});
