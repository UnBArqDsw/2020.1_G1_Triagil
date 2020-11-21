import { ADD_USER_INFO, RESET_SESSION, } from './types';
  
export const addUserInfo = (userInfo) => ({
    type: ADD_USER_INFO,
    payload: userInfo,
});

export const resetSession = () => ({
    type: RESET_SESSION,
})