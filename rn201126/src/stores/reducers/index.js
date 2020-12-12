import {combineReducers} from 'redux';
import CountReducers from './CountReducers';

export default combineReducers({
  count: CountReducers,
});
