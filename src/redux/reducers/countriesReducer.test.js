import countriesReducer from './countriesReducer';

describe('countriesReducer', () => {
  const initialState = {
    countries: [],
    countryData: null,
  };

  it('should return the initial state', () => {
    expect(countriesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_COUNTRIES', () => {
    const action = {
      type: 'UPDATE_COUNTRIES',
      payload: ['USA', 'Canada'],
    };
    expect(countriesReducer(initialState, action)).toEqual({
      ...initialState,
      countries: ['USA', 'Canada'],
    });
  });

  it('should handle UPDATE_COUNTRY_DATA', () => {
    const action = {
      type: 'UPDATE_COUNTRY_DATA',
      payload: { name: 'USA' },
    };
    expect(countriesReducer(initialState, action)).toEqual({
      ...initialState,
      countryData: { name: 'USA' },
    });
  });
});
