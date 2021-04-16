import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

//import reducer..
import rootReducer from '../reducers/index';

//middleware
const middleware = [thunk, logger];

//Store
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;