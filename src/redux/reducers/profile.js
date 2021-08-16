import { CHANGE_USERNAME } from '../actionTypes';

const initialState = {
  username: '',
};

export default function profile(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
}
