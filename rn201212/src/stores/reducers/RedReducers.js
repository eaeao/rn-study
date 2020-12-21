import {types} from '../actions/RedAction';

export default (state = [0, 100], action) => {
  switch (action.type) {
    case types.ColorUp:
      console.log('color[1] reducer num: ', action.payload.num[1]);
      action.payload.num[1] = action.payload.num[1] + action.payload.plus;
      return action.payload.num;
    default:
      return state;
  }
};
