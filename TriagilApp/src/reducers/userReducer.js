import initialState from './initialState';
import { ADD_USER_INFO } from '../actions/types';

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

    default:
      return state;
  }
};

export default userReducer;