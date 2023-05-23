import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,

  GET_COUNT_PROFILE,
  GET_COUNT_PROFILE_SUCCESS,
  GET_COUNT_PROFILE_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,

  users: [],
  countProfile: 0,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    // GET ALL USERS
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: initialState.users,
      };

    // GET COUNT PROFILE
    case GET_COUNT_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_COUNT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        countProfile: action.payload,
      };

    case GET_COUNT_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        countProfile: 0,
      };

    default:
      return state;
  }
};

export default users;
