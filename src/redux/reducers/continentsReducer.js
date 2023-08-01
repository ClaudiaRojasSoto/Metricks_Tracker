import { FETCH_CONTINENTS_POPULATION } from '../actions/continentsActions'; // Importa desde 'continentsActions'

const initialState = {};

const continentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTINENTS_POPULATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default continentsReducer;
