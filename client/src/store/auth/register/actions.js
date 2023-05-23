import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from './actionTypes';

// REGISTER
export const actionRegister = (payload) => ({
  type: REGISTER,
  payload,
});

export const actionRegisterSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const actionRegisterFailed = () => ({
  type: REGISTER_FAILED,
});
