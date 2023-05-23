import {
  GET_ALL_CAMERAS,
  GET_ALL_CAMERAS_SUCCESS,
  GET_ALL_CAMERAS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  cameras: [],
};

const getAllCameras = (state = initialState, action) => {
  switch (action.type) {
    // GET USER INFO
    case GET_ALL_CAMERAS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_CAMERAS_SUCCESS:
      return {
        ...state,
        loading: false,
        cameras: action.payload,
      };

    case GET_ALL_CAMERAS_FAILED:
      return {
        ...state,
        loading: false,
        cameras: initialState.cameras,
      };

    default:
      return state;
  }
};

export default getAllCameras;
