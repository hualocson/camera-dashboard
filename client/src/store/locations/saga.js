import { put, takeLeading } from 'redux-saga/effects';

import locationAPI from 'apis/location/locationAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_LOCATIONS,
} from './actionTypes';

import {
  actionGetAllLocationsSuccess,
  actionGetAllLocationsFailed,
} from './actions';

function* getAllLocations() {
  try {
    const response = yield locationAPI.getAllLocations();

    yield put(actionGetAllLocationsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllLocationsFailed());
  }
}

export default function* LocationsSaga() {
  yield takeLeading(GET_ALL_LOCATIONS, getAllLocations);
}
