import React from 'react';
import { Button } from '@material-ui/core';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
