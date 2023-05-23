import React from 'react';
import { Outlet } from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';

import styles from './index.module.css';

function Layout() {
  return (
    <div>
      <div className={styles.Dashboard}>
        <Dashboard />
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
