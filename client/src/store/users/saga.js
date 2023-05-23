import { put, takeLeading } from 'redux-saga/effects';

import axiosClient from 'utils/axios';

import userAPI from 'apis/user/userAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_USERS,
  GET_COUNT_PROFILE,
} from './actionTypes';

import {
  actionGetAllUsersSuccess,
  actionGetAllUsersFailed,

  actionGetCountProfileSuccess,
  actionGetCountProfileFailed,
} from './actions';

function* getAllUsers() {
  try {
    const token = localStorage.getItem('token');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield userAPI.getAllUsers();

    yield put(actionGetAllUsersSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllUsersFailed());
  }
}

function* getCountProfile() {
  try {
    const response = yield userAPI.getCountProfile();
    yield put(actionGetCountProfileSuccess(response));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionGetCountProfileFailed());
  }
}

export default function* UserProfileSaga() {
  yield takeLeading(GET_ALL_USERS, getAllUsers);
  yield takeLeading(GET_COUNT_PROFILE, getCountProfile);
}
