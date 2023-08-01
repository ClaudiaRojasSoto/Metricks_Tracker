import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  // Otros reducers si los tienes.
});

export default rootReducer;
