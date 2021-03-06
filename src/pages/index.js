import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Hospitality WebApp">
      Hospitality Web App! Com Next.js e Material Ui
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" color="primary" disableElevation>
        Disable elevation
      </Button>
    </Layout>
  );
}
