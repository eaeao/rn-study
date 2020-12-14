import {combineReducers} from 'redux';
import CountReducers from './CountReducers';
import saturationReducers from './ColorReducers';

export default combineReducers({
  count: CountReducers,
  colorcount: saturationReducers,
});
