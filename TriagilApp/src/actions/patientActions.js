import { UPDATE_PATIENT_NAME, } from './types';
  
export const updatePatientName = (patientInfo) => ({
    type: UPDATE_PATIENT_NAME,
    payload: patientInfo,
});