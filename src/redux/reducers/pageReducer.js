import { NOT_FOUND } from 'redux-first-router';

const components = {
  HOME: 'Home',
  ADMIN: 'Admin',
  NOTIFICATIONS: 'Notifications',
  [NOT_FOUND]: 'NotFound',
};

export default function page(state = 'HOME', action = {}) {
  return components[action.type] || state;
}
