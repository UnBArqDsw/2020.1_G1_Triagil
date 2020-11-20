import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import userReducer from './userReducer';
import triageReducer from './triageReducer';

const reducers = combineReducers({
  user: userReducer,
  triageRecord: triageReducer,

});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;