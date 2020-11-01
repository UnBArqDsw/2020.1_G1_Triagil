import initialState from './initialState';
import { ADD_NURSE_INFO } from '../actions/types';

const nurseReducer = (state = initialState.user.nurse, action) => {
  console.log(`Action: ${JSON.stringify(action)}`);

  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case ADD_NURSE_INFO:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default nurseReducer;