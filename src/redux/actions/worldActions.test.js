import axios from 'axios';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import { fetchWorldPopulation } from './worldActions';

const mockStore = configureStore([thunk]);
jest.mock('axios');

describe('Continents Population Actions', () => {
  it('fetchWorldPopulation dispatches FETCH_WORLD_POPULATION', async () => {
    // Mock response
    axios.get.mockResolvedValue({
      data:
         [{ population: 1000 }, { population: 2000 }, { population: 3000 }],
    });
    const expectedAction = {
      type: 'FETCH_WORLD_POPULATION',
      payload: 6000,
    };
    const store = mockStore({});

    await store.dispatch(fetchWorldPopulation());
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});
