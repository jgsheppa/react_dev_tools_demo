// configureStore.js
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import page from './reducers/pageReducer';
import userRole from './reducers/user';

const routesMap = {
  HOME: '/',
  ADMIN: '/admin',
  NOTFOUND: '/NotFound',
  NOTIFICATIONS: '/admin/notifications',
};

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const rootReducer = combineReducers({ page, location: reducer, userRole });
  const middlewares = composeWithDevTools(applyMiddleware(middleware));
  const enhancers = compose(enhancer, middlewares);

  const store = createStore(rootReducer, preloadedState, enhancers);

  return { store };
}
