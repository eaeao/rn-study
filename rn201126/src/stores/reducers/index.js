import {combineReducers} from 'redux';
import saturationReducers from './ColorReducers';

export default combineReducers({
  colorcount: saturationReducers,
});
