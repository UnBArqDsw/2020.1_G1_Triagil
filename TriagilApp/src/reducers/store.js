import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import patientReducer from './patientReducer';
import nurseReducer from './nurseReducer';

const reducers = combineReducers({
  patient: patientReducer,
  nurse: nurseReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;