export const types = {
  COUNT_UP: 'COUNT_UP',
  COUNT_DOWN: 'COUNT_DOWN',
};

export function countUp(num, selected, plus) {
  return {
    type: types.COUNT_UP,
    payload: {num: num, selected: selected, plus: plus},
  };
}

export function countDown(num) {
  return {
    type: types.COUNT_DOWN,
    payload: num,
  };
}

export default {countUp, countDown};
