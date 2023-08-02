import { FETCH_WORLD_POPULATION } from '../actions/worldActions';

const initialState = 0;

const worldReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORLD_POPULATION:
      return action.payload;
    default:
      return state;
  }
};

export default worldReducer;
