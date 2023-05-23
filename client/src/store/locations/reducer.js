import {
  GET_ALL_LOCATIONS,
  GET_ALL_LOCATIONS_SUCCESS,
  GET_ALL_LOCATIONS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  locations: [],
};

const getAllLocations = (state = initialState, action) => {
  switch (action.type) {
    // GET USER INFO
    case GET_ALL_LOCATIONS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: action.payload,
      };

    case GET_ALL_LOCATIONS_FAILED:
      return {
        ...state,
        loading: false,
        locations: initialState.locations,
      };

    default:
      return state;
  }
};

export default getAllLocations;
