/* eslint-disable no-useless-escape */
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:+\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const TEXT_LENGTH_LIMIT = {
  VERY_SHORT: 25,
  SHORT: 150,
  MEDIUM: 300,
  LONG: 2500,
  PASSWORD: 6,
};

const LOCATIONS = {
  HOME: '/',
  CAMERAS: 'cameras',
  WARNING: 'warning',
  LOCATION: 'location',
  STATISTIC: 'statistic',
  CHART: 'chart',
  CONTACT: 'contact',
  SETTING: 'setting',
  LOGIN: 'login',
  REGISTER: 'register',
  SETTINGWARNING: 'settingwarning',
};

export default LOCATIONS;
