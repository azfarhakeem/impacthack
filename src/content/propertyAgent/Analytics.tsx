import {
    Button,
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    Avatar,
    alpha,
    Tooltip,
    CardActionArea,
    styled,
    useTheme,
    IconButton
  } from '@mui/material';
  import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Line } from 'react-chartjs-2';

import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { Add } from '@mui/icons-material';
  
  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
      margin: ${theme.spacing(2, 0, 1, -0.5)};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(1)};
      padding: ${theme.spacing(0.5)};
      border-radius: 60px;
      height: ${theme.spacing(5.5)};
      width: ${theme.spacing(5.5)};
      background: ${
        theme.palette.mode === 'dark'
          ? theme.colors.alpha.trueWhite[30]
          : alpha(theme.colors.alpha.black[100], 0.07)
      };
    
      img {
        background: ${theme.colors.alpha.trueWhite[100]};
        padding: ${theme.spacing(0.5)};
        display: block;
        border-radius: inherit;
        height: ${theme.spacing(4.5)};
        width: ${theme.spacing(4.5)};
      }
  `
  );
  
  const AvatarAddWrapper = styled(Avatar)(
    ({ theme }) => `
          background: ${theme.colors.alpha.black[10]};
          color: ${theme.colors.primary.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
  `
  );
  
  const CardAddAction = styled(Card)(
    ({ theme }) => `
          border: ${theme.colors.primary.main} dashed 1px;
          height: 100%;
          color: ${theme.colors.primary.main};
          transition: ${theme.transitions.create(['all'])};
          
          .MuiCardActionArea-root {
            height: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .MuiTouchRipple-root {
            opacity: .2;
          }
          
          &:hover {
            border-color: ${theme.colors.alpha.black[70]};
          }
  `
  );

  
  
  function Analytics() {
    const theme = useTheme();

    const chartOptions: ApexOptions = {

       
        chart: {
            height: 280,
            type: "area",
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          series: [
            {
              name: "Series 1",
              data: [45, 52, 38, 45, 19, 23, 2]
            }
          ],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100]
            }
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "March",
              "April",
              "May",
              "Jun",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"

            ]
          },
          yaxis: {
            
            labels: {
              formatter: (value: number) => `${value / 1000}k` // Formats the labels to display in thousands (e.g., 100k)
            }
          }
          
      };
      const chart1Data = [
        {
          name: 'Bitcoin Price',
          data: [150000, 200000, 175000, 345000, 75000, 286000, 190000, 300000, 350000]
        }
      ];
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pb: 3
          }}
        >
          <Typography variant="h3">Analytics</Typography>
          
        </Box>
        <Grid container spacing={3} >
        <Grid xs={12} sm={6} md={12} item>
        <Card sx={{
                px: 1
              }}>
        {/* <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pb: 20
          }}
        > */}
          {/* <Typography variant="h3">Graph</Typography> */}
          {/* <generateDummyData/> */}
          <Chart
            options={chartOptions}
            series={chart1Data}
            type="area"
            height={200}
            width='100%'
          />
          
        {/* </Box> */}
        </Card>
        </Grid>
        </Grid>
        <Grid container spacing={3} paddingTop={1}>
          <Grid xs={12} sm={6} md={6} item>
            <Card
              sx={{
                px: 1
              }}
            >
              <CardContent>
                
                <Typography variant="h5" noWrap>
                  Total Sales 2023
                </Typography>
                {/* <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography> */}
                <Box
                  sx={{
                    pt: 5.5
                  }}
                >
                  <Typography variant="h1" gutterBottom noWrap>
                    RM350,000.00
                  </Typography>
                  {/* <Typography variant="subtitle2" noWrap>
                    Data Mind
                  </Typography> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
            <Card
              sx={{
                px: 1
              }}
            >
              <CardContent>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      alignItems: 'flex-end',
      height: '100%'
    }}
  >
    <IconButton 
    size="small" 
    sx={{  backgroundColor: '#399d4e', borderRadius: '50%' }} >
        <Add sx={{ color: '#FFF' }} />
    </IconButton>
    {/* <Typography variant="subtitle1" noWrap>
      XRP
    </Typography> */}
  </Box>
  <Box sx={{ pt: 3.5 }}>
    <Typography variant="subtitle2" gutterBottom noWrap>
      Approved
    </Typography>
    <Typography variant="subtitle2" noWrap>
      Submissions
    </Typography>
  </Box>
</CardContent>


            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
          <Card sx={{ px: 1 }}>
            <CardContent>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end',
            height: '100%'
            }}
        >
            <IconButton 
            size="small" 
            sx={{  backgroundColor: '#399d4e', borderRadius: '50%' }} >
                <Add sx={{ color: '#FFF' }} />
            </IconButton>
            {/* <Typography variant="subtitle1" noWrap>
            XRP
            </Typography> */}
        </Box>
        <Box sx={{ pt: 3.5 }}>
            <Typography variant="subtitle2" gutterBottom noWrap>
            Add New
            </Typography>
            <Typography variant="subtitle2" noWrap>
            Submissions
            </Typography>
        </Box>
        </CardContent>
            </Card>



          </Grid>
          
        </Grid>
      </>
    );
  }
  
  export default Analytics;
  