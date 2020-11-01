import { ADD_NURSE_INFO, } from './types';
  
export const addNurseInfo = (nurseInfo) => ({
    type: ADD_NURSE_INFO,
    payload: nurseInfo,
});