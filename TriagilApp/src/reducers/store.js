import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import patientReducer from './patientReducer';
import nurseReducer from './nurseReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  //patient: patientReducer,
  //nurse: nurseReducer,
  user: userReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;