import {types} from '../actions/CountAction';

export default (state = 100, action) => {
  switch (action.type) {
    case types.COUNT_UP:
      return state + action.payload;
    case types.COUNT_DOWN:
      return state - action.payload;
    default:
      return state;
  }
};
