import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
        {/* ---- LEFT COLUMN ---- */}
        <Grid item xs={4} className="landingColumn">
          <Card elevation={2}>Pose Card 1</Card>
          <Card elevation={2}>Pose Card 2</Card>
          <Card elevation={2}>Pose Card 3</Card>
          <Card elevation={2}>Pose Card 4</Card>
        </Grid>
        {/* ---- MIDDLE COLUMN ---- */}
        <Grid item xs={4}>
          →
        </Grid>
        {/* ---- RIGHT COLUMN ---- */}
        <Grid item xs={4} className="landingColumn">
          {/* <Paper elevation={2}>3</Paper> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
