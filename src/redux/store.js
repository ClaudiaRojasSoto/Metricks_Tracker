import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducers/countriesReducer';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
