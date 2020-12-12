import { combineReducers } from 'redux';
import CountReducers from './CountReducers';
import ColorReducers from './ColorReducers';

export default combineReducers({
  count: CountReducers,
  color: ColorReducers
});