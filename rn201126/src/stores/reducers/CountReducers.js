import {types} from '../actions/CountAction';

export default (state = 0, action) => {
  switch (action.type) {
    case types.COUNT_UP:
      const countedUp = state + action.payload;
      if (countedUp > 100) {
        return state;
      }
      return countedUp;
    case types.COUNT_DOWN:
      const countedDown = state - action.payload;
      if (countedDown < 0) {
        return state;
      }
      return countedDown;
    default:
      return state;
  }
};
