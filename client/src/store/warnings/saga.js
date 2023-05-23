import { put, takeLeading } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import warningAPI from 'apis/warning/warningAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_WARNINGS,
  ADD_WARNING,
  MARK_AS_READED_WARNINGS,
  REMOVE_WARNINGS,
} from './actionTypes';

import {
  actionGetAllWarningsSuccess,
  actionGetAllWarningsFailed,
  actionAddWarningSuccess,
  actionAddWarningFailed,
  actionRemoveWarningsSuccess,
  actionRemoveWarningsFailed,
  actionMarkAsReadedWarningsSuccess,
  actionMarkAsReadedWarningsFailed,
} from './actions';

function* getAllWarnings() {
  try {
    const response = yield warningAPI.getAllWarnings();

    yield put(actionGetAllWarningsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllWarningsFailed());
  }
}

function* addWarning(action) {
  try {
    const response = yield warningAPI.addWarning(action.payload);
    toast.success('Success');
    yield put(actionAddWarningSuccess(response.data));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionAddWarningFailed());
  }
}

function* markAsReadedWarnings(action) {
  try {
    const response = yield warningAPI.markAsReadedWarnings(action.payload);

    yield put(actionMarkAsReadedWarningsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionMarkAsReadedWarningsFailed());
  }
}

function* removeWarnings(action) {
  try {
    const response = yield warningAPI.removeWarnings(action.payload);
    toast.success('Successfully remove');
    yield put(actionRemoveWarningsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionRemoveWarningsFailed());
  }
}

export default function* WarningsSaga() {
  yield takeLeading(GET_ALL_WARNINGS, getAllWarnings);
  yield takeLeading(ADD_WARNING, addWarning);
  yield takeLeading(MARK_AS_READED_WARNINGS, markAsReadedWarnings);
  yield takeLeading(REMOVE_WARNINGS, removeWarnings);
}
