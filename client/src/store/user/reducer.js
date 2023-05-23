import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,

  LOGOUT,
} from './actionTypes';

const initialState = {
  loading: false,
  loadingAvatar: false,

  user: {
    id: '',
    avatar: '',
    username: '',
  },
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    // GET USER INFO
    case GET_USER_INFO:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case GET_USER_INFO_FAILED:
      return {
        ...state,
        loading: false,
        user: initialState.user,
      };

    // LOGOUT
    case LOGOUT:
      return {
        ...state,
        user: initialState.user,
      };

    default:
      return state;
  }
};

export default userProfile;
