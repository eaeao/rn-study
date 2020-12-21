export const types = {
  COUNT_UP: 'COUNT',
};

export function count(num, plus) {
  return {
    type: types.COUNT_UP,
    payload: {num: num, plus: plus},
  };
}
export default {count};
