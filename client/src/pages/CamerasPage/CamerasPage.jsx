import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllCameras } from 'store/actions';

import DataTable from 'components/DataTable/DataTable';

const tableHead = {
  serial: 'Serial',
  homeId: 'Home ID',
  connection: 'Connection',
  level: 'Security Level',
};

function CamerasPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Cameras);

  const transformedData = data.cameras.map((item) => ({
    ...item,
    connection: item.connection ? 'Connected' : 'Disconnected',
  }));

  useEffect(() => {
    dispatch(actionGetAllCameras());
  }, []);

  return (
    <DataTable
      title="Camera"
      data={transformedData}
      tableHead={tableHead}
      loading={data.loading}
    />
  );
}

export default CamerasPage;
