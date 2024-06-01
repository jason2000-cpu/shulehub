'use client'

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import colors from '@/config/colors';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};


const PieChart = () => {
  const data = {
    labels: ['Zeraki Finance', 'Zeraki Analytics', 'Zeraki Timetable'],
    datasets: [
      {
        label: '20 of',
        data: [20, 60, 40],
        backgroundColor: [
          colors.grey,
          'rgba(0, 73, 64, 1)',
          'rgba(0, 73, 64, .7)'
        ],
        borderColor: [
          colors.grey,
          'rgba(0, 73, 64, 1)',
          'rgba(0, 73, 64, .7)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chart data={data} options={options} />
    </div>
  );
};




export default PieChart;

