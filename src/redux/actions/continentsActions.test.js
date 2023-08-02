import axios from 'axios';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import { fetchContinentsPopulation } from './continentsActions';

const mockStore = configureStore([thunk]);
jest.mock('axios');

describe('Continents Population Actions', () => {
  it('fetchContinentsPopulation dispatches FETCH_CONTINENTS_POPULATION', async () => {
    axios.get.mockResolvedValue({ data: [] });
    const expectedAction = {
      type: 'FETCH_CONTINENTS_POPULATION',
      payload: expect.any(Object),
    };
    const store = mockStore({});

    await store.dispatch(fetchContinentsPopulation());
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});
