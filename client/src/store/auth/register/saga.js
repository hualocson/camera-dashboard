import { toast } from 'react-toastify';
import { put, takeLeading } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { removeSpacesWithTrim } from 'utils';

import { REGISTER } from './actionTypes';
import {
  actionRegisterSuccess,
  actionRegisterFailed,
} from './actions';

function* register({ payload }) {
  try {
    const {
      values: {
        username,
        email,
        password,
      },

      callback,
    } = payload;

    const newData = removeSpacesWithTrim({
      username,
      email,
      password,
    });

    yield authAPI.register(newData);

    yield put(actionRegisterSuccess());

    toast.success('User has been registered successfully.');

    callback();
  } catch (error) {
    toast.error(error.response.data);

    yield put(actionRegisterFailed());
  }
}

export default function* registerSaga() {
  yield takeLeading(REGISTER, register);
}
