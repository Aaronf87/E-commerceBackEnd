// import express
const express = require('express');
// import routes
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3002;

// middleware to parse JSON and string data encoded in the URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});

