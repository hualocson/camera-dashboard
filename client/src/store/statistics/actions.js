import {
  GET_ALL_STATISTICS,
  GET_ALL_STATISTICS_SUCCESS,
  GET_ALL_STATISTICS_FAILED,
  MARK_AS_READED_STATISTICS,
  MARK_AS_READED_STATISTICS_SUCCESS,
  MARK_AS_READED_STATISTICS_FAILED,
  REMOVE_STATISTICS,
  REMOVE_STATISTICS_SUCCESS,
  REMOVE_STATISTICS_FAILED,
} from './actionTypes';

export const actionGetAllStatistics = (payload) => ({
  type: GET_ALL_STATISTICS,
  payload,
});

export const actionGetAllStatisticsSuccess = (payload) => ({
  type: GET_ALL_STATISTICS_SUCCESS,
  payload,
});

export const actionGetAllStatisticsFailed = () => ({
  type: GET_ALL_STATISTICS_FAILED,
});

export const actionMarkAsReadedStatistics = (payload) => ({
  type: MARK_AS_READED_STATISTICS,
  payload,
});

export const actionMarkAsReadedStatisticsSuccess = (payload) => ({
  type: MARK_AS_READED_STATISTICS_SUCCESS,
  payload,
});

export const actionMarkAsReadedStatisticsFailed = () => ({
  type: MARK_AS_READED_STATISTICS_FAILED,
});

export const actionRemoveStatistics = (payload) => ({
  type: REMOVE_STATISTICS,
  payload,
});

export const actionRemoveStatisticsSuccess = (payload) => ({
  type: REMOVE_STATISTICS_SUCCESS,
  payload,
});

export const actionRemoveStatisticsFailed = () => ({
  type: REMOVE_STATISTICS_FAILED,
});
