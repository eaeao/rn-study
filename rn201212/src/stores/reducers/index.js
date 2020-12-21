import {combineReducers} from 'redux';
import saturationReducers from './ColorReducers';
import redsaturationReducers from './RedReducers';

export default combineReducers({
  colorcount: saturationReducers,
  redcolorcount: redsaturationReducers,
});
