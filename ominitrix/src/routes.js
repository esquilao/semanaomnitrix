const express = require('express');
const ongController = require('./controller/ongController');
const IncidentController = require('./controller/IncidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');


const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs' , ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;