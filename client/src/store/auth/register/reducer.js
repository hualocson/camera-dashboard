import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    // REGISTER
    case REGISTER:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default register;
