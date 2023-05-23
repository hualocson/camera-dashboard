import {
  GET_ALL_WARNINGS,
  GET_ALL_WARNINGS_SUCCESS,
  GET_ALL_WARNINGS_FAILED,
  ADD_WARNING,
  ADD_WARNING_SUCCESS,
  ADD_WARNING_FAILED,
  MARK_AS_READED_WARNINGS,
  MARK_AS_READED_WARNINGS_SUCCESS,
  MARK_AS_READED_WARNINGS_FAILED,
  REMOVE_WARNINGS,
  REMOVE_WARNINGS_SUCCESS,
  REMOVE_WARNINGS_FAILED,
} from './actionTypes';

export const actionGetAllWarnings = (payload) => ({
  type: GET_ALL_WARNINGS,
  payload,
});

export const actionGetAllWarningsSuccess = (payload) => ({
  type: GET_ALL_WARNINGS_SUCCESS,
  payload,
});

export const actionGetAllWarningsFailed = () => ({
  type: GET_ALL_WARNINGS_FAILED,
});

export const actionAddWarning = (payload) => ({
  type: ADD_WARNING,
  payload,
});

export const actionAddWarningSuccess = (payload) => ({
  type: ADD_WARNING_SUCCESS,
  payload,
});

export const actionAddWarningFailed = () => ({
  type: ADD_WARNING_FAILED,
});

export const actionMarkAsReadedWarnings = (payload) => ({
  type: MARK_AS_READED_WARNINGS,
  payload,
});

export const actionMarkAsReadedWarningsSuccess = (payload) => ({
  type: MARK_AS_READED_WARNINGS_SUCCESS,
  payload,
});

export const actionMarkAsReadedWarningsFailed = () => ({
  type: MARK_AS_READED_WARNINGS_FAILED,
});

export const actionRemoveWarnings = (payload) => ({
  type: REMOVE_WARNINGS,
  payload,
});

export const actionRemoveWarningsSuccess = (payload) => ({
  type: REMOVE_WARNINGS_SUCCESS,
  payload,
});

export const actionRemoveWarningsFailed = () => ({
  type: REMOVE_WARNINGS_FAILED,
});
