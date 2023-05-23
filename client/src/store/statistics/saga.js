import { put, takeLeading } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import statisticAPI from 'apis/statistic/statisticAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_STATISTICS,
  REMOVE_STATISTICS,
  MARK_AS_READED_STATISTICS,
} from './actionTypes';

import {
  actionGetAllStatisticsSuccess,
  actionGetAllStatisticsFailed,
  actionMarkAsReadedStatisticsSuccess,
  actionMarkAsReadedStatisticsFailed,
  actionRemoveStatisticsSuccess,
  actionRemoveStatisticsFailed,
} from './actions';

function* getAllStatistics() {
  try {
    const response = yield statisticAPI.getAllStatistics();

    yield put(actionGetAllStatisticsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllStatisticsFailed());
  }
}

function* markAsReadedStatistics(action) {
  try {
    const response = yield statisticAPI.markAsReadedStatistics(action.payload);

    yield put(actionMarkAsReadedStatisticsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionMarkAsReadedStatisticsFailed());
  }
}

function* removeStatistics(action) {
  try {
    const response = yield statisticAPI.removeStatistics(action.payload);
    toast.success('Successfully remove');
    yield put(actionRemoveStatisticsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionRemoveStatisticsFailed());
  }
}

export default function* StatisticsSaga() {
  yield takeLeading(GET_ALL_STATISTICS, getAllStatistics);
  yield takeLeading(MARK_AS_READED_STATISTICS, markAsReadedStatistics);
  yield takeLeading(REMOVE_STATISTICS, removeStatistics);
}
