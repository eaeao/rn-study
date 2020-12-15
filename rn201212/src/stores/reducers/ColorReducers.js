import {types} from '../actions/ColorAction';


export default (state = [60,100], action) => {
    switch (action.type) {
        case types.COUNT_UP:
            console.log('color[1] reducer num: ', action.payload.num[1]);
            action.payload.num[1] = action.payload.num[1] + action.payload.plus;
            return action.payload.num;
        default:
            return state;
    }
};
