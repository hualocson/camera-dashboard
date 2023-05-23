import React from 'react';
import { NavLink } from 'react-router-dom';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import EmergencyShareRoundedIcon from '@mui/icons-material/EmergencyShareRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

import styles from './index.module.css';
import './style.css';

function Dashboard() {
  return (
    <div className={styles.DashboardContainer}>
      <div className={styles.DashboardTitle}>
        <img src="/logo.png" alt="" />
        Dashboard
      </div>

      <ul className={styles.DashboardItems}>
        <NavLink to="/" className={styles.DashboardItem}>
          {/* <img src={Home} alt="home" className={styles.DashboardItemIcon} /> */}
          <PieChartRoundedIcon className={styles.DashboardItemIcon} />
          Trang chủ
        </NavLink>

        <NavLink to="/cameras" className={styles.DashboardItem}>
          <StorageRoundedIcon className={styles.DashboardItemIcon} />
          Quản lí Camera
        </NavLink>

        <NavLink to="/warning" className={styles.DashboardItem}>
          <EmergencyShareRoundedIcon className={styles.DashboardItemIcon} />
          Cảnh báo
        </NavLink>

        <NavLink to="/location" className={styles.DashboardItem}>
          <HomeRoundedIcon className={styles.DashboardItemIcon} />
          Khu vực
        </NavLink>

        <NavLink to="/statistic" className={styles.DashboardItem}>
          <EditNoteRoundedIcon className={styles.DashboardItemIcon} />
          Thống kê
        </NavLink>

        <NavLink to="/contact" className={styles.DashboardItem}>
          <GroupsRoundedIcon className={styles.DashboardItemIcon} />
          Liên hệ
        </NavLink>
      </ul>

      <span className={styles.Divider} />

      <ul className={styles.DashboardItems}>
        <NavLink to="/setting" className={styles.DashboardItem}>
          <SettingsRoundedIcon className={styles.DashboardItemIcon} />
          Cài đặt
        </NavLink>

        <NavLink to="/register" className={styles.DashboardItem}>
          <WorkspacePremiumRoundedIcon className={styles.DashboardItemIcon} />
          Đăng kí
        </NavLink>
      </ul>
    </div>
  );
}

export default Dashboard;
