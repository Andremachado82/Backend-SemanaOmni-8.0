const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({message: 'Hellow world'})
});

routes.post('/devs', DevController.store);

module.exports = routes;