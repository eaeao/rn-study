import { types } from '../actions/ColorAction'



export default (state = [100,100,100,100,100,100,100], action) => {
  switch (action.type) {
    case types.COLOR_CONTROL:
      state[action.payload.selected] = state[action.payload.selected] + action.payload.brightness
      return [...state]
    default:
      return [...state]
  }
};