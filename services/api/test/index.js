var routes = require("express").Router();

routes.get('/', (req, res) => {
    res.json({ endpoint: 'test', response: '200' });
  });

module.exports = routes;
