import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import indexReducer from '../reducers';

const store = createStore(
  indexReducer,
  applyMiddleware(logger, thunk),
);

export default store;
