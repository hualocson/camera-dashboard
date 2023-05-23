import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllStatistics, actionMarkAsReadedStatistics, actionRemoveStatistics } from 'store/actions';

import DataTable from 'components/DataTable/DataTable';

import tick from 'assets/Icons/tick.png';
import trash from 'assets/Icons/trash.png';

import styles from './index.module.css';

const tableHead = {
  profile: 'Profile', location: 'Khu vực', serial: 'Serial', data: 'Thời gian',
};

function StatisticPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.Statistics);

  const [selectedRows, setSelectedRows] = useState([]);

  const handleDirectBtnClick = () => {
    navigate('/chart');
  };

  const markAsReaded = () => {
    dispatch(actionMarkAsReadedStatistics(selectedRows));
  };

  const removeWarning = () => {
    dispatch(actionRemoveStatistics(selectedRows));
  };

  useEffect(() => {
    dispatch(actionGetAllStatistics());
  }, []);

  return (
    <>
      <div className={styles.FunctionalContainer}>
        <button type="button" className={styles.DirectedBtn} onClick={handleDirectBtnClick}>
          Nút chuyển thống kê và đếm người
        </button>

        <div className={styles.FunctionalContainerRight}>
          <button type="button" onClick={markAsReaded} className={styles.IconContainer}>
            <img src={tick} alt="tick" />

            Đánh dấu đã đọc
          </button>

          <button type="button" onClick={removeWarning} className={styles.IconContainer}>
            <img src={trash} alt="trash" />

            Xóa thông báo
          </button>
        </div>
      </div>

      <DataTable title="Thống kê" data={data.statistics} tableHead={tableHead} loading={data.loading} setSelectedRows={setSelectedRows} />
    </>
  );
}

export default StatisticPage;
