const express = require('express');
const OngsController = require('./controllers/OngController');
const IncidentCrontroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentCrontroller.index);
routes.post('/incidents', IncidentCrontroller.create);
routes.delete('/incidents/:id', IncidentCrontroller.delete);

module.exports = routes;