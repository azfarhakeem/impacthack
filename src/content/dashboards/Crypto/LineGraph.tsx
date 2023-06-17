import { Card, Box, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const generateDummyData = () => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [100000, 200000, 300000, 400000];

  const datasets = data.map((value, index) => ({
    label: `Dataset ${index + 1}`,
    data: Array.from({ length: 12 }, () => Math.floor(Math.random() * value)),
    borderColor: 'rgba(0, 123, 255, 1)', // Customize the line color here
    fill: false,
  }));

  return {
    labels,
    datasets,
  };
};

export default generateDummyData;
