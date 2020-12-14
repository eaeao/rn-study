import {types} from '../actions/ColorAction';

const copyPaste = [];
for (let i = 360; i >= 0; i = i - 10) {
  copyPaste.push([i, 100]);
}

export default (state = copyPaste, action) => {
  switch (action.type) {
    case types.COUNT_UP:
      console.log('reducer num: ', action.payload.num);
      console.log('reducer selected: ', action.payload.selected);
      console.log('reducer plus: ', action.payload.plus);
      action.payload.num[action.payload.selected][1] =
        action.payload.num[action.payload.selected][1] + action.payload.plus;
      return action.payload.num;
    default:
      return state;
  }
};
