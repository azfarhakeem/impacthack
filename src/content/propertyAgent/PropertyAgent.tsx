import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from '../propertyAgent/PageHeader';
import Analytics from '../propertyAgent/Analytics';
import Statistics from '../propertyAgent/Statistics';
import Performance from '../propertyAgent/Performance';
import AccountSecurity from '../dashboards/Crypto/AccountSecurity';
import SideInfo from './SideInfo';

function PropertyAgent() {
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
          <Grid item xs={12}>
            <Statistics />
          </Grid>
          
          
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default PropertyAgent;
