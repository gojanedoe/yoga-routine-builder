import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Item from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { borders } from "@material-ui/system";
import InfoModal from "./InfoModal.js";
import InfoDialog from "./InfoDialog.js";
import "./App.css";

function App() {
  return (
    <Container className="landingContainer">
      <InfoDialog />
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
          <Card elevation={2}>Pose Card 5</Card>
          <Card elevation={2}>Pose Card 6</Card>
          <Card elevation={2}>Pose Card 7</Card>
          <Card elevation={2}>Pose Card 8</Card>
          <Card elevation={2}>Pose Card 9</Card>
          <Card elevation={2}>Pose Card 10</Card>
        </Grid>
        {/* ---- MIDDLE COLUMN ---- */}
        <Grid item xs={4}>
          →
        </Grid>
        {/* ---- RIGHT COLUMN ---- */}
        <Grid item xs={4} className="landingColumn">
          {/* <Paper elevation={2}>3</Paper> */}
        </Grid>
        <Button variant="outlined">Start Routine</Button>
        <Button variant="outlined">Save Routine</Button>
      </Grid>
    </Container>

  );
}

export default App;
