import initialState from './initialState';
import { ADD_USER_INFO, UPDATE_PATIENT_EMAIL,
  UPDATE_PATIENT_NAME, UPDATE_PATIENT_PASSWORD } from '../actions/types';

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

      case UPDATE_PATIENT_EMAIL:
      return{
        ...state,
        patient: {
          ...state.patient,
          email: action.payload.email,
        }
      };

      case UPDATE_PATIENT_PASSWORD:
      return{
        ...state,
        patient: {
          ...state.patient,
          password: action.payload.password,
        }
      };

    default:
      return state;
  }
};

export default userReducer;