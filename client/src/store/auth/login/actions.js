import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './actionTypes';

// LOGIN
export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const actionLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const actionLoginFailed = () => ({
  type: LOGIN_FAILED,
});
