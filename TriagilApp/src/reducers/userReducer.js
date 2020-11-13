import initialState from './initialState';
import { ADD_USER_INFO, UPDATE_PATIENT_NAME } from '../actions/types';

const userReducer = (state = initialState.user, action) => {
  console.log(`Action: ${JSON.stringify(action)}`);

  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...action.payload,
      };

    case UPDATE_PATIENT_NAME:
      return{
        ...state,
        patient: {
          ...state.patient,
          name: action.payload.name,
        }
      };

    default:
      return state;
  }
};

export default userReducer;