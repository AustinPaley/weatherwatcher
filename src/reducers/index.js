import {combineReducers} from 'redux';
import zipReducer from './zip';
import currentWeatherReducer from './currentWeather'

export default combineReducers({
  zip: zipReducer,
  currentWeather: currentWeatherReducer
})
