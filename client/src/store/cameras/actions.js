import {
  GET_ALL_CAMERAS,
  GET_ALL_CAMERAS_SUCCESS,
  GET_ALL_CAMERAS_FAILED,
} from './actionTypes';

export const actionGetAllCameras = (payload) => ({
  type: GET_ALL_CAMERAS,
  payload,
});

export const actionGetAllCamerasSuccess = (payload) => ({
  type: GET_ALL_CAMERAS_SUCCESS,
  payload,
});

export const actionGetAllCamerasFailed = () => ({
  type: GET_ALL_CAMERAS_FAILED,
});
