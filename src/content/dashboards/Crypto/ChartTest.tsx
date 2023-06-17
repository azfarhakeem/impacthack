import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@mui/system';

const SimpleChart = () => {
  const filledPercentage = 25;

  const chartOptions = {
    chart: {
      toolbar: {
        show: false
      },
      animations: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
          labels: {
            show: false
          }
        }
      }
    },
    colors: ['#006ae1', 'transparent'],
    labels: ['Filled', 'Empty'],
    dataLabels: {
      enabled: false
    },
    series: [filledPercentage, 100 - filledPercentage],
    stroke: {
      width: 0
    },
    tooltip: {
      enabled: false
    }
  };

  const chartStyle = {
    width: '150px',
    height: '150px',
    margin: '0 auto'
  };

  const valueStyle = {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  return (
    <Box sx={chartStyle}>
      <Chart options={chartOptions} series={chartOptions.series} type="donut" height={150} />
      <Box sx={valueStyle}>{`${filledPercentage}%`}</Box>
    </Box>
  );
};

export default SimpleChart;
