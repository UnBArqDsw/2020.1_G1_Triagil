import { Router } from 'express';

import PersonController from './app/controller/PersonController';
import PatientController from './app/controller/PatientController';
import NurseController from './app/controller/NurseController';
import LoginController from './app/controller/LoginController';
import PatientRecordController from './app/controller/PatientRecordController';
import nurseRecordController from './app/controller/NurseRecordController';
const routes = new Router();

routes.post('/login', LoginController.show);

routes.post('/person', PersonController.store);
routes.get('/person', PersonController.show);

routes.post('/patient', PatientController.store);
routes.get('/patient', PatientController.show);

routes.post('/nurse', NurseController.store);
routes.get('/nurse', NurseController.show);

routes.post('/patientRecord', PatientRecordController.store);
routes.get('/patientRecord', PatientRecordController.show);

export default routes;
