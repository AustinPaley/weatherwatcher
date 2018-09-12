import {combineReducers} from 'redux';
import zipReducer from './zip';

export default combineReducers({
  zip: zipReducer
})
