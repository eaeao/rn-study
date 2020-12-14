export const types = {
  COUNT_UP: 'COUNT_UP',
  COUNT_DOWN: 'COUNT_DOWN',
};

export function countUp(num) {
  return {
    type: types.COUNT_UP,
    payload: num,
  };
}

export function countDown(num) {
  return {
    type: types.COUNT_DOWN,
    payload: num,
  };
}
