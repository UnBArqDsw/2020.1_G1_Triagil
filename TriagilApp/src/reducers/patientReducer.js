import initialState from './initialState';
import { ADD_PATIENT_INFO } from '../actions/types';

const patientReducer = (state = initialState.user, action) => {
  console.log(`Action: ${JSON.stringify(action)}`);

  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case ADD_PATIENT_INFO:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default patientReducer;