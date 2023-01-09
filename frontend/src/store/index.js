import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import animalsReducer from './animals';
import meetAndGreetsReducer from './meetAndGreets';
import organizationsReducer from './organizations';
import reviewsReducer from './reviews';
import usersReducer from './user';

const rootReducer = combineReducers ({
    session,
    animals: animalsReducer,
    meetAndGreets: meetAndGreetsReducer,
    organizations: organizationsReducer,
    reviews: reviewsReducer,
    users: usersReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => { 
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;