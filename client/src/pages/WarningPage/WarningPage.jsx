import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllWarnings, actionRemoveWarnings, actionMarkAsReadedWarnings } from 'store/actions';

import DataTable from 'components/DataTable/DataTable';

import tick from 'assets/Icons/tick.png';
import trash from 'assets/Icons/trash.png';
import setting1 from 'assets/Icons/setting1.png';

import styles from './index.module.css';

const tableHead = {
  content: 'Nội dung', location: 'Khu vực', serial: 'Serial', level: 'Mức độ', playback: 'Playbacks',
};

function WarningPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Warnings);

  const [selectedRows, setSelectedRows] = useState([]);

  const settingWarningButtonHandle = () => {
    navigate('/settingwarning');
  };

  const markAsReaded = () => {
    dispatch(actionMarkAsReadedWarnings(selectedRows));
  };

  const removeWarning = () => {
    dispatch(actionRemoveWarnings(selectedRows));
  };

  useEffect(() => {
    dispatch(actionGetAllWarnings());
  }, []);

  return (
    <>
      <div className={styles.FunctionalContainer}>
        <button type="button" onClick={markAsReaded} className={styles.IconContainer}>
          <img src={tick} alt="tick" />

          Đánh dấu đã đọc
        </button>

        <button type="button" onClick={removeWarning} className={styles.IconContainer}>
          <img src={trash} alt="trash" />

          Xóa thông báo
        </button>

        <button type="button" onClick={settingWarningButtonHandle} className={styles.IconContainer}>
          <img src={setting1} alt="setting1" />

          Cài đặt cảnh báo
        </button>
      </div>

      <DataTable title="Lịch sử cảnh báo" data={data.warnings} tableHead={tableHead} loading={data.loading} setSelectedRows={setSelectedRows} />
    </>
  );
}

export default WarningPage;
