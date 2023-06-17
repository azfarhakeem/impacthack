import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from '../dashboards/Crypto/PageHeader';
import Analytics from '../dashboards/Crypto/Analytics';
import { AccountBalance } from '@mui/icons-material';
import AccountSecurity from '../dashboards/Crypto/AccountSecurity';
import Statistics from '../dashboards/Crypto/Statistics';
import Wallets from '../dashboards/Crypto/Wallets';
import WatchList from '../dashboards/Crypto/WatchList';
import Performance from '../dashboards/Crypto/Performance';

function Banker() {
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
          <Grid item xs={12}>
            <Analytics />
          </Grid>
          {/* <Grid item lg={4} xs={12}>
            <PropertyDistribution />
          </Grid> */}
          <Grid item xs={12}>
            <Statistics />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Banker;
