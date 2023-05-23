import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import axiosClient from 'utils/axios';

import LOCATIONS from 'constants/index';

import LoginPage from 'pages/LoginPage/LoginPage';
import Pages404 from 'pages/Pages404/Pages404';

import Layout from 'Layout/Layout';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import RouteWrapper from 'components/RouteWrapper/RouteWrapper';

import './index.css';

const CamerasPage = React.lazy(() => import('pages/CamerasPage/CamerasPage'));
const ContactPage = React.lazy(() => import('pages/ContactPage/ContactPage'));
const HomePage = React.lazy(() => import('pages/HomePage/HomePage'));
const LocationPage = React.lazy(() => import('pages/LocationPage/LocationPage'));
const RegisterPage = React.lazy(() => import('pages/RegisterPage/RegisterPage'));
const StatisticPage = React.lazy(() => import('pages/StatisticPage/StatisticPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage/ChartPage'));
const SettingPage = React.lazy(() => import('pages/SettingPage/SettingPage'));
const WarningPage = React.lazy(() => import('pages/WarningPage/WarningPage'));
const SettingWarning = React.lazy(() => import('pages/SettingWarning/SettingWarning'));

function App(props) {
  const {
    user,
    actionGetUserInfo,
  } = props;

  const navigate = useNavigate();

  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    axiosClient.defaults.headers.Authorization = accessToken;
  }

  useEffect(() => {
    if ((!accessToken && user.id === '') || !accessToken) {
      navigate(LOCATIONS.LOGIN);
      return;
    }

    actionGetUserInfo({ navigate });

    // eslint-disable-next-line consistent-return
    return () => {};
  }, [accessToken, user.id]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path={LOCATIONS.LOGIN} element={<LoginPage />} />

        <Route path={LOCATIONS.HOME} exact element={<Layout />}>
          <Route index element={RouteWrapper(HomePage, 'Trang chủ')} />

          <Route path={LOCATIONS.CAMERAS} element={RouteWrapper(CamerasPage, 'Quản lí Camera')} />

          <Route path={LOCATIONS.WARNING} element={RouteWrapper(WarningPage, 'Cảnh báo')} />

          <Route path={LOCATIONS.LOCATION} element={RouteWrapper(LocationPage, 'Khu vực')} />

          <Route path={LOCATIONS.STATISTIC} element={RouteWrapper(StatisticPage, 'Thống kê')} />

          <Route path={LOCATIONS.CHART} element={RouteWrapper(ChartPage, 'Biểu đồ')} />

          <Route path={LOCATIONS.CONTACT} element={RouteWrapper(ContactPage, 'Liên hệ')} />

          <Route path={LOCATIONS.SETTING} element={RouteWrapper(SettingPage, 'Cài đặt')} />

          <Route path={LOCATIONS.REGISTER} element={RouteWrapper(RegisterPage, 'Đăng kí')} />

          <Route path={LOCATIONS.SETTINGWARNING} element={RouteWrapper(SettingWarning, 'Cài đặt cảnh báo')} />
        </Route>

        <Route path="*" element={<Pages404 />} />
      </Routes>
    </Suspense>
  );
}

App.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,

  actionGetUserInfo: PropTypes.func.isRequired,
};

export default App;
