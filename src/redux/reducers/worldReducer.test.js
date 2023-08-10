import worldReducer from './worldReducer';
import { FETCH_WORLD_POPULATION } from '../actions/worldActions';

describe('worldReducer', () => {
  const initialState = 0;

  it('should return the initial state', () => {
    expect(worldReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_WORLD_POPULATION', () => {
    const action = {
      type: FETCH_WORLD_POPULATION,
      payload: 8000,
    };
    expect(worldReducer(initialState, action)).toEqual(8000);
  });
});
