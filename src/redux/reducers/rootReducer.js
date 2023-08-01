import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import continentsReducer from './continentsReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  continents: continentsReducer,
});

export default rootReducer;
