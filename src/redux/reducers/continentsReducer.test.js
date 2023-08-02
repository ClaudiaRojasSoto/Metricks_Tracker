import continentsReducer from './continentsReducer';
import { FETCH_CONTINENTS_POPULATION } from '../actions/continentsActions';

describe('continentsReducer', () => {
  it('should return the initial state', () => {
    expect(continentsReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_CONTINENTS_POPULATION', () => {
    const action = {
      type: FETCH_CONTINENTS_POPULATION,
      payload: { Africa: 1000 },
    };
    expect(continentsReducer({}, action)).toEqual({ Africa: 1000 });
  });
});
