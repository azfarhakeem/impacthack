import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from '../buyerseller/PageHeader';
import Analytics from '../buyerseller/Analytics';
import { AccountBalance } from '@mui/icons-material';
import AccountSecurity from '../buyerseller/AccountSecurity';
import Statistics from '../buyerseller/Statistics';
import Wallets from '../buyerseller/Wallets';
import Performance from '../buyerseller/Performance';
import SideInfo from './SideInfo';

function buyerSeller() {
  return (
    <>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Performance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Analytics />
          </Grid>
          <Grid item lg={4} xs={12}>
            <SideInfo />
          </Grid>
          {/* <Grid item xs={12}>
            <Statistics />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          
          <Grid item xs={12}>
            <AccountBalance />
          </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default buyerSeller;
