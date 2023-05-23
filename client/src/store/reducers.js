import { combineReducers } from 'redux';

import User from 'store/user/reducer';
import Cameras from 'store/cameras/reducer';
import Locations from 'store/locations/reducer';
import Statistics from 'store/statistics/reducer';
import Warnings from 'store/warnings/reducer';
import Users from 'store/users/reducer';

import Login from 'store/auth/login/reducer';
import Register from 'store/auth/register/reducer';

const rootReducer = combineReducers({
  User,
  Cameras,
  Locations,
  Statistics,
  Warnings,
  Users,

  Login,
  Register,
});

export default rootReducer;
