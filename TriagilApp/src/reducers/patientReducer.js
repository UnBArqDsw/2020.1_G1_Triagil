import initialState from './initialState';
import { UPDATE_PATIENT_NAME } from '../actions/types';

const patientReducer = (state = initialState.user.patient, action) => {
  console.log(`Action: ${JSON.stringify(action)}`);

  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case UPDATE_PATIENT_NAME:
      return {
        
        name: action.payload,
      };

    default:
      return state;
  }
};

export default patientReducer;