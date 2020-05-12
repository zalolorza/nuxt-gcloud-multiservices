var routes = require("express").Router();

routes.get('/', (req, res) => {
  res.send('Welcome to the REST API');
});

module.exports = routes;
