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
    Divider
  } from '@mui/material';
  import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';


  
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
  
  function Statistics() {

    const theme = useTheme();
    const chartOptions1: ApexOptions = {
        chart: {
          background: 'transparent',
          stacked: false,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '60%'
            }
          }
        },
        colors: ['#fff', '#1c81c2', '#333', '#5c6ac0'],
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val + '%';
          },
          style: {
            colors: [theme.colors.alpha.trueWhite[100]]
          },
          background: {
            enabled: true,
            foreColor: theme.colors.alpha.trueWhite[100],
            padding: 8,
            borderRadius: 4,
            borderWidth: 0,
            opacity: 0.3,
            dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 1,
              color: theme.colors.alpha.black[70],
              opacity: 0.5
            }
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: theme.colors.alpha.black[50],
            opacity: 0.5
          }
        },
        fill: {
          opacity: 1
        },
        labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
        legend: {
          labels: {
            colors: theme.colors.alpha.trueWhite[100]
          },
          show: false
        },
        stroke: {
          width: 0
        },
        theme: {
          mode: theme.palette.mode
        }
      };

      const chartSeries1 = [ 0, 100];

      const chartOptions2: ApexOptions = {
        chart: {
          background: 'transparent',
          stacked: false,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '60%'
            }
          }
        },
        colors: ['#fff', '#93c47d', '#333', '#5c6ac0'],
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val + '%';
          },
          style: {
            colors: [theme.colors.alpha.trueWhite[100]]
          },
          background: {
            enabled: true,
            foreColor: theme.colors.alpha.trueWhite[100],
            padding: 8,
            borderRadius: 4,
            borderWidth: 0,
            opacity: 0.3,
            dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 1,
              color: theme.colors.alpha.black[70],
              opacity: 0.5
            }
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: theme.colors.alpha.black[50],
            opacity: 0.5
          }
        },
        fill: {
          opacity: 1
        },
        labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
        legend: {
          labels: {
            colors: theme.colors.alpha.trueWhite[100]
          },
          show: false
        },
        stroke: {
          width: 0
        },
        theme: {
          mode: theme.palette.mode
        }
      };

      const chartSeries2 = [ 0, 100];

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
            <Typography variant="h3">Statistics</Typography>
          </Box>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  px: 0,
                  backgroundColor: '#FFF',
                  display: 'flex', // Set display to flex
                  alignItems: 'center' // Align items vertically in the center
                }}
              >
                <Grid
                  container
                  md={8}
                  sx={{
                    padding: '20px',
                    display: 'flex', // Set display to flex
                    alignItems: 'center' // Align items vertically in the center
                  }}
                >
                  <Grid item xs={12}>
                    <Typography  variant="h3" noWrap>
                      Weekly Target
                    </Typography>
                    <Box
                      sx={{
                        pt: 1
                      }}
                    >
                      <Typography  variant="h5" gutterBottom noWrap>
                        25 Area in Johor Bahru
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{
                    display: 'flex', // Set display to flex
                    justifyContent: 'flex-end', // Align content to the right
                    paddingRight: '20px', // Add right padding for spacing
                    position: 'relative' // Add relative positioning
                  }}
                >
                  <Chart height={100} options={chartOptions1} series={chartSeries1} type="donut" />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      position: 'absolute',
                      top: '45%',
                      left: '45%',
                      transform: 'translate(-50%, -50%)',
                      
                    }}
                  >
                    50%
                  </Typography>
                </Grid>
              </Card>
            </Grid>
    
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  px: 0,
                  backgroundColor: '#FFF',
                  display: 'flex', // Set display to flex
                  alignItems: 'center' // Align items vertically in the center
                }}
              >
                <Grid
                  container
                  md={8}
                  sx={{
                    padding: '20px',
                    display: 'flex', // Set display to flex
                    alignItems: 'center' // Align items vertically in the center
                  }}
                >
                  <Grid item xs={12}>
                    <Typography  variant="h3" noWrap>
                      Monthly Target
                    </Typography>
                    <Box
                      sx={{
                        pt: 1
                      }}
                    >
                      <Typography  variant="h5" gutterBottom noWrap>
                        25 Area in Johor Bahru
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{
                    display: 'flex', // Set display to flex
                    justifyContent: 'flex-end', // Align content to the right
                    paddingRight: '20px', // Add right padding for spacing
                    position: 'relative' // Add relative positioning
                  }}
                >
                  <Chart height={100} options={chartOptions2} series={chartSeries2} type="donut" />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      position: 'absolute',
                      top: '45%',
                      left: '45%',
                      transform: 'translate(-50%, -50%)',
                      
                    }}
                  >
                    25%
                  </Typography>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </>
      );
  }
  
  export default Statistics;
  