import {
  GET_ALL_LOCATIONS,
  GET_ALL_LOCATIONS_SUCCESS,
  GET_ALL_LOCATIONS_FAILED,
} from './actionTypes';

export const actionGetAllLocations = (payload) => ({
  type: GET_ALL_LOCATIONS,
  payload,
});

export const actionGetAllLocationsSuccess = (payload) => ({
  type: GET_ALL_LOCATIONS_SUCCESS,
  payload,
});

export const actionGetAllLocationsFailed = () => ({
  type: GET_ALL_LOCATIONS_FAILED,
});
