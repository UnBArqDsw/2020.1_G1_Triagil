import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import userReducer from './userReducer';

const reducers = combineReducers({
  user: userReducer,

});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;