import { CHANGE_USERNAME } from './actionTypes';

export const updateUsername = (newUserName) => ({
  type: CHANGE_USERNAME,
  payload: newUserName,
});
