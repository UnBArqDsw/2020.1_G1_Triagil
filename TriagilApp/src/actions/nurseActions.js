import { ADD_NURSE_INFO, UPDATE_NURSE_PASSWORD } from './types';
  
export const addNurseInfo = (nurseInfo) => ({
    type: ADD_NURSE_INFO,
    payload: nurseInfo,
});

export const updateNursePassword = (nurseInfo) => ({
    type: UPDATE_NURSE_PASSWORD,
    payload: nurseInfo,
});