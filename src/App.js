import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Item from '@material-ui/core/Grid';
import { borders } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';

import './App.css';

function App() {
  return (
    <Container className="landingContainer">
      <Grid
        container
        className="landingGrid"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} className="landingColumn">
          <Paper elevation={2}>1</Paper>
        </Grid>
        <Grid item xs={4}>
          →
        </Grid>
        <Grid item xs={4} className="landingColumn">
          <Paper elevation={2}>3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
