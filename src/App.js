import React, { useState } from 'react';
import DraggablePoseCard from './components/DraggablePoseCard';
import PoseBank from './components/PoseBank';
import RoutineBuilder from './components/RoutineBuilder';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import yogaPoses from './data/yogaPoses.json';
import DragLogic from './components/DragLogic';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './App.css';

// const dummyPoses = [
//   { id: 'pose-1', name: 'Pose 1' },
//   { id: 'pose-2', name: 'Pose 2' },
//   { id: 'pose-3', name: 'Pose 3' },
//   { id: 'pose-4', name: 'Pose 4' },
//   { id: 'pose-5', name: 'Pose 5' },
//   { id: 'pose-6', name: 'Pose 6' },
//   { id: 'pose-7', name: 'Pose 7' },
//   { id: 'pose-8', name: 'Pose 8' },
//   { id: 'pose-9', name: 'Pose 9' },
//   { id: 'pose-10', name: 'Pose 10' }
// ];

// const Routine = [];

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
      {/* <DragDropContext onDragEnd={handleOnDragEnd}> */}
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
      {/* </DragDropContext> */}
    </DragLogic>
  );
}

export default App;
