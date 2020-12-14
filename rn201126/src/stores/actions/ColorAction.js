export const types = {
  COUNT_UP: 'COUNT',
};

export function count(num, selected, plus) {
  return {
    type: types.COUNT_UP,
    payload: {num: num, selected: selected, plus: plus},
  };
}
export default {count};
