import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default login;
