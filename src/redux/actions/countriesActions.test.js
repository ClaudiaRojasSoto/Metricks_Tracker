import axios from 'axios';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import { fetchCountriesByContinent, fetchCountryDataByName } from './countriesActions';

const mockStore = configureStore([thunk]);
jest.mock('axios');

describe('Continents Population Actions', () => {
  it('fetchCountriesByContinent dispatches UPDATE_COUNTRIES', async () => {
    axios.get.mockResolvedValue({ data: [{}] });
    const expectedAction = {
      type: 'UPDATE_COUNTRIES',
      payload: expect.any(Array),
    };
    const store = mockStore({});

    await store.dispatch(fetchCountriesByContinent('Europe'));
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});

describe('Continents Population Actions', () => {
  it('fetchCountryDataByName dispatches UPDATE_COUNTRY_DATA', async () => {
    // Mock response
    axios.get.mockResolvedValue({ data: [{}] });
    const expectedAction = {
      type: 'UPDATE_COUNTRY_DATA',
      payload: expect.any(Object),
    };
    const store = mockStore({});

    await store.dispatch(fetchCountryDataByName('Germany'));
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});
