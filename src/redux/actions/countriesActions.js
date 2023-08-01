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
      console.log('No se devolvieron datos válidos del continente en la API');
    }
  } catch (error) {
    console.log('Error al obtener los datos del continente:', error);
  }
};

export { updateCountries, updateCountryData, fetchCountriesByContinent };
