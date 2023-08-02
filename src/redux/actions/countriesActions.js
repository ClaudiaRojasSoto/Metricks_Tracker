import axios from 'axios';

const updateCountries = (countries) => ({
  type: 'UPDATE_COUNTRIES',
  payload: countries,
});

const updateCountryData = (countryData) => ({
  type: 'UPDATE_COUNTRY_DATA',
  payload: countryData,
});

const fetchCountriesByContinent = (continent) => async (dispatch) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
    if (response.data && response.data.length > 0) {
      dispatch(updateCountries(response.data));
    } else {
      return 'No valid continent data returned in the API';
    }
  } catch (error) {
    return 'No valid continent data returned in the API';
  }
  return null;
};

const fetchCountryDataByName = (countryName) => async (dispatch) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    if (response.data && response.data.length > 0) {
      dispatch(updateCountryData(response.data[0]));
    } else {
      return 'No valid country data returned in the API';
    }
  } catch (error) {
    return 'Error getting country data:';
  }
  return null;
};

export {
  updateCountries, updateCountryData, fetchCountriesByContinent, fetchCountryDataByName,
};
