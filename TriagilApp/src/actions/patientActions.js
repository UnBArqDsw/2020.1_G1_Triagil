import { ADD_PATIENT_INFO, } from './types';
  
export const addPatientInfo = (patientInfo) => ({
    type: ADD_PATIENT_INFO,
    payload: patientInfo,
});