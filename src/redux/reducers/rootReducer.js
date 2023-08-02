import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import continentsReducer from './continentsReducer';
import worldReducer from './worldReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  continents: continentsReducer,
  worldPopulation: worldReducer,
});

export default rootReducer;
