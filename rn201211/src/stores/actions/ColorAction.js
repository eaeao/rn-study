export const types = {
    COLOR_CONTROL: 'COLOR_CONTROL',
};

export function colorControl(num,selected) {
    return {
        type: types.COLOR_CONTROL,
        payload: {brightness: num , selected: selected}
    };
}



export default { colorControl };