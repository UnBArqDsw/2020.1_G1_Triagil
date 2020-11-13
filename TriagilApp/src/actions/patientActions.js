import { UPDATE_PATIENT_NAME, UPDATE_PATIENT_EMAIL, UPDATE_PATIENT_PASSWORD } from './types';
  
export const updatePatientName = (patientInfo) => ({
    type: UPDATE_PATIENT_NAME,
    payload: patientInfo,
});

export const updatePatientEmail = (patientInfo) => ({
    type: UPDATE_PATIENT_EMAIL,
    payload: patientInfo,
});

export const updatePatientPassword = (patientInfo) => ({
    type: UPDATE_PATIENT_PASSWORD,
    payload: patientInfo,
});