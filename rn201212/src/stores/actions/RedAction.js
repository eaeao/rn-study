export const types = {
  ColorUp: 'REDCOLOR',
};

export function redcount(num, plus) {
  return {
    type: types.ColorUp,
    payload: {num: num, plus: plus},
  };
}
export default {redcount};
