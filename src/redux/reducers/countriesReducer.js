const initialState = {
  countries: [],
  countryData: null,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };
    case 'UPDATE_COUNTRY_DATA':
      return {
        ...state,
        countryData: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
