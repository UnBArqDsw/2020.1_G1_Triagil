import { Router } from 'express';

import PersonController from './app/controller/PersonController';
import PatientController from './app/controller/PatientController';
import NurseController from './app/controller/NurseController';

const routes = new Router();

routes.post('/person', PersonController.store);
routes.post('/patient', PatientController.store);
routes.post('/nurse', NurseController.store);

export default routes;
