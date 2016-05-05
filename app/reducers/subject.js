import { ADD_SUBJECT } from '../actions/actionTypes';

const initialState = [];

export const subjects = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      return state.concat(action.subject);
    default:
      return state;
  }
}
