import {combineReducers} from 'redux';
import ColorReducers from './ColorReducers';

export default combineReducers({
  colorcount: ColorReducers,
});
