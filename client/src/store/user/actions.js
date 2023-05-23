import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,

  LOGOUT,
} from './actionTypes';

// GET USER INFO
export const actionGetUserInfo = (payload) => ({
  type: GET_USER_INFO,
  payload,
});

export const actionGetUserInfoSuccess = (payload) => ({
  type: GET_USER_INFO_SUCCESS,
  payload,
});

export const actionGetUserInfoFailed = () => ({
  type: GET_USER_INFO_FAILED,
});

// LOGOUT
export const actionLogout = (payload) => ({
  type: LOGOUT,
  payload,
});
