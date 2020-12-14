import {types} from '../actions/CountAction';

export default (state = 10, action) => {
  switch (action.type) {
    case types.COUNT_UP:
      console.log('count reducer num: ', action.payload);
      return state + action.payload;
    case types.COUNT_DOWN:
      console.log('count reducer num: ', action.payload);
      return state - action.payload;
    default:
      return state;
  }
};
