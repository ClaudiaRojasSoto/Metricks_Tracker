import axios from 'axios';

export const FETCH_CONTINENTS_POPULATION = 'FETCH_CONTINENTS_POPULATION';

export const fetchContinentsPopulation = () => async (dispatch) => {
  const continents = ['africa', 'americas', 'asia', 'oceania', 'europe'];

  const promises = continents.map((continent) => axios.get(`https://restcountries.com/v3.1/region/${continent}`));

  const responses = await Promise.all(promises);

  const continentsPopulation = responses.reduce((acc, response, index) => {
    const totalPopulation = response.data.reduce((sum, country) => sum + country.population, 0);
    return { ...acc, [continents[index]]: totalPopulation };
  }, {});

  dispatch({ type: FETCH_CONTINENTS_POPULATION, payload: continentsPopulation });
};
