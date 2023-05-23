import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';

import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function LineChart({ data }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [...new Set(data.map((item) => item.location))];

  const options = { timeZone: 'Asia/Ho_Chi_Minh' };
  const selectedDateLocal = new Date(selectedDate.toLocaleString('en-US', options));

  const statisticsInDay = data.filter((statistic) => {
    const statisticDate = new Date(statistic.time);
    const statisticLocation = statistic.location;
    const isDateMatch = statisticDate.getFullYear() === selectedDateLocal.getFullYear()
      && statisticDate.getMonth() === selectedDateLocal.getMonth()
      && statisticDate.getDate() === selectedDateLocal.getDate();
    const isLocationMatch = selectedLocation === '' || statisticLocation === selectedLocation;
    return isDateMatch && isLocationMatch;
  });

  const statisticsByHour = statisticsInDay.reduce((result, statistic) => {
    const statisticDate = new Date(statistic.time);
    const hour = statisticDate.getHours();

    return {
      ...result,
      [hour]: (result[hour] || 0) + 1,
    };
  }, {});

  const labels = ['00', '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23'];

  const chartData = labels.map((hour) => ({
    x: hour,
    y: statisticsByHour[hour] || 0,
  }));

  const chartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <div>
      <div className={styles.TopContainer}>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Tất cả khu vực</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <div className={styles.DatePickerContainer}>
          <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
        </div>
      </div>

      <Line
        type="monotone"
        data={{
          datasets: [{
            data: chartData,
            label: 'Profile',
            borderColor: 'orange',
            pointRadius: 0,
          }],
        }}
        options={chartOptions}
      />
    </div>
  );
}

LineChart.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default LineChart;
