import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,

  GET_COUNT_PROFILE,
  GET_COUNT_PROFILE_SUCCESS,
  GET_COUNT_PROFILE_FAILED,
} from './actionTypes';

// GET ALL USERS
export const actionGetAllUsers = (payload) => ({
  type: GET_ALL_USERS,
  payload,
});

export const actionGetAllUsersSuccess = (payload) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload,
});

export const actionGetAllUsersFailed = () => ({
  type: GET_ALL_USERS_FAILED,
});

export const actionGetCountProfile = () => ({
  type: GET_COUNT_PROFILE,
});

export const actionGetCountProfileSuccess = (payload) => ({
  type: GET_COUNT_PROFILE_SUCCESS,
  payload,
});

export const actionGetCountProfileFailed = () => ({
  type: GET_COUNT_PROFILE_FAILED,
});
