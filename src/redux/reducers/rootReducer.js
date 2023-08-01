import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export default rootReducer;
