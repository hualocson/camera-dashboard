import { all, fork } from 'redux-saga/effects';

import User from 'store/user/saga';
import Cameras from 'store/cameras/saga';
import Locations from 'store/locations/saga';
import Statistics from 'store/statistics/saga';
import Warnings from 'store/warnings/saga';
import Users from 'store/users/saga';

import LoginSaga from 'store/auth/login/saga';
import RegisterSaga from 'store/auth/register/saga';

export default function* rootSaga() {
  yield all([
    fork(User),
    fork(Cameras),
    fork(Locations),
    fork(Statistics),
    fork(Warnings),
    fork(Users),

    fork(LoginSaga),
    fork(RegisterSaga),
  ]);
}
