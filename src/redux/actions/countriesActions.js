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
      console.log('No valid continent data returned in the API');
    }
  } catch (error) {
    console.log('Error getting continent data:', error);
  }
};

const fetchCountryDataByName = (countryName) => async (dispatch) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    if (response.data && response.data.length > 0) {
      dispatch(updateCountryData(response.data[0]));
    } else {
      console.log('No valid country data returned in the API');
    }
  } catch (error) {
    console.log('Error getting country data:', error);
  }
};

export {
  updateCountries, updateCountryData, fetchCountriesByContinent, fetchCountryDataByName,
};
