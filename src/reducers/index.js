import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
//imported reducer

const rootReducer = combineReducers({
  weather: WeatherReducer
});//combined imported reducer

export default rootReducer;
