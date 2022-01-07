import React, { useState } from 'react';
import PoseBank from './components/PoseBank';
import RoutineBuilder from './components/RoutineBuilder';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import yogaPoses from './data/yogaPoses.json';
import DragLogic from './components/DragLogic';

import './App.css';

function App() {
  const [poses, updatePoses] = useState(yogaPoses);
  const [routine, updateRoutine] = useState([]);

  return (
    <DragLogic
      poses={poses}
      updatePoses={updatePoses}
      routine={routine}
      updateRoutine={updateRoutine}
    >
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
          <PoseBank poses={poses} />

          {/* ---- MIDDLE COLUMN ---- */}
          <Grid item xs={4}>
            →
          </Grid>
          {/* ---- RIGHT COLUMN ---- */}
          <RoutineBuilder routine={routine} />

          <Button variant="outlined">Start Routine</Button>
          <Button variant="outlined">Save Routine</Button>
        </Grid>
      </Container>
    </DragLogic>
  );
}

export default App;
