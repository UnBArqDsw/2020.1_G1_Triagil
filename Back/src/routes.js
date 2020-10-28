import { Router } from 'express';

import PersonController from './app/controller/PersonController';
import PatientController from './app/controller/PatientController';
import NurseController from './app/controller/NurseController';

const routes = new Router();

routes.post('/person', PersonController.store);
routes.get('/person', PersonController.show);

routes.post('/patient', PatientController.store);
routes.get('/patient', PatientController.show);

routes.post('/nurse', NurseController.store);
routes.get('/nurse', NurseController.show);

export default routes;
