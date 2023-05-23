import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllStatistics } from 'store/actions';

import LineChart from 'components/LineChart/LineChart';

function ChartPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Statistics);

  useEffect(() => {
    dispatch(actionGetAllStatistics());
  }, []);

  return (
    <LineChart data={data.statistics} />
  );
}

export default ChartPage;
