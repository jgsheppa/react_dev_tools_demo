// configureStore.js
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import page from './reducers/pageReducer';
import userRole from './reducers/user';
import profile from './reducers/profile';

const routesMap = {
  HOME: '/',
  ADMIN: '/admin',
  NOTFOUND: '/NotFound',
  NOTIFICATIONS: '/admin/notifications',
};

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  // We can customize the Redux Dev Tools functionality for our production build
  const composeEnhancers = composeWithDevTools({
    features: {
      pause: true, // start/pause recording of dispatched actions
      lock: true, // lock/unlock dispatching actions and side effects
      persist: true, // persist states on page reloading
      export: true, // export history of actions in a file
      import: 'custom', // import history of actions from a file
      jump: true, // jump back and forth (time travelling)
      skip: true, // skip (cancel) actions
      reorder: true, // drag and drop actions in the history list
      dispatch: false, // dispatch custom actions or action creators
      test: true, // generate tests for the selected actions
    },
  });

  const rootReducer = combineReducers({
    page,
    location: reducer,
    userRole,
    profile,
  });
  const middlewares =
    process.env.NODE_ENV === 'production'
      ? composeEnhancers(applyMiddleware(middleware))
      : composeWithDevTools(applyMiddleware(middleware));
  const enhancers = compose(enhancer, middlewares);

  const store = createStore(rootReducer, preloadedState, enhancers);

  return { store };
}
