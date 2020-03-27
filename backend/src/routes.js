import express from 'express';
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

import ValidateOngStore from './validators/ongStore';
import ValidateProfile from './validators/profileIndex';
import ValidateDelete from './validators/incidentDelete';
import ValidateIncidentIndex from './validators/incidentIndex';
import ValidadeIncidentStore from './validators/incidentStore';

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', ValidateOngStore, OngController.create);

routes.get('/profile', ValidateProfile, ProfileController.index);

routes.get('/incidents', ValidateIncidentIndex, IncidentController.index);
routes.post('/incidents', ValidadeIncidentStore, IncidentController.create);
routes.delete('/incidents/:id', ValidateDelete, IncidentController.delete);

export default routes;
