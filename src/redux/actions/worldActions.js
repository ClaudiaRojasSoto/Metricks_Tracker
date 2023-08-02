import axios from 'axios';

export const FETCH_WORLD_POPULATION = 'FETCH_WORLD_POPULATION';

export const fetchWorldPopulation = () => async (dispatch) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const worldPopulation = response.data.reduce((sum, country) => sum + country.population, 0);
    dispatch({ type: FETCH_WORLD_POPULATION, payload: worldPopulation });
  } catch (error) {
    console.log('Error getting world population:', error);
  }
};
