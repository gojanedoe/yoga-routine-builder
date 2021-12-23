import React, { useState } from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

//firebase
import database from './firebase';
import { ref, set, onValue, update, remove } from 'firebase/database';
import './App.css';

function App() {
 
  //database testing state
  const [routine, setRoutine] = useState("");

  //database testing handler
  const handleTest = (e) => {
    setRoutine(e.target.value);
  }

  const createRoutine = () => {

    update(ref(database, 'Routine'), {
      routine: routine,
      id: "pose-1",
      name: "Plank",
      description: "Hello",
      benefits: "Good For You",
      image: "this is an image file",
      audio: "audio file!",
      muscles: [
        "Abdominals", "Glutes", "Quads"
        ]
    });

  }

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
        {/* testing firebase */}
        <div>
          <input type="test" onChange={handleTest} value={routine} />
          <button onClick={createRoutine}>Add Routine</button>
        </div>

      </Grid>
    </Container>
  );
}

export default App;
