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
import GetRoutineGrid from './components/RoutineGrid';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

//firebase
import database from './firebase';
import { ref, set, onValue, update, remove, get, child, push } from 'firebase/database';

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
  const [viewModalOpen, setViewModalOpen] = useState(false);

    //database testing update/create routine

    // const createRoutine = () => {

    //   update(ref(database, 'YogaPose'), {
    //     routine: data,
    //     id: "pose-1",
    //     name: "Plank",
    //     description: "Hello",
    //     benefits: "Good For You",
    //     image: "this is an image file",
    //     audio: "audio file!",
    //     muscles: [
    //       "Abdominals", "Glutes", "Quads"
    //       ]
    //   });
  
    // }
  
    const saveRoutine = () => {

      push(ref(database, '/'), {
        Routine: Array.from(routine)
      })
    }

  const handleOnDragEnd = result => {
    // If pose is not dragged to a valid destination, keep list the same
    if (!result.destination) return;

    const source = result.source.droppableId;
    const sourceIndex = result.source.index;
    const destination = result.destination.droppableId;
    const destinationIndex = result.destination.index;

    if (source === destination) {
      // Grab poses from original list
      const items = Array.from(source === 'column-1' ? poses : routine);

      // Grab moving pose & remove from list
      const [reorderedItem] = items.splice(sourceIndex, 1);

      // Add moving pose to new spot (index) in list
      items.splice(destinationIndex, 0, reorderedItem);

      //Update state
      source === 'column-1' ? updatePoses(items) : updateRoutine(items);
    } else if (source === 'column-1' && destination === 'column-2') {
      // Grab poses from original lists
      const fromItems = Array.from(poses);
      const toItems = Array.from(routine);

      // Grab moving pose & remove from list
      const [reorderedItem] = fromItems.splice(sourceIndex, 1);

      // Add moving pose to new spot (index) in list
      toItems.splice(destinationIndex, 0, reorderedItem);

      //Update state
      updatePoses(fromItems);
      updateRoutine(toItems);
    } else if (source === 'column-2' && destination === 'column-1') {
      // Grab poses from original lists
      const fromItems = Array.from(routine);
      const toItems = Array.from(poses);

      // Grab moving pose & remove from list
      const [reorderedItem] = fromItems.splice(sourceIndex, 1);

      // Add moving pose to new spot (index) in list
      toItems.splice(destinationIndex, 0, reorderedItem);

      //Update state
      updatePoses(toItems);
      updateRoutine(fromItems);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
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
          <Button variant="outlined" onClick={saveRoutine}>Save Routine</Button>
          <Button variant="outlined" onClick={() => setViewModalOpen({viewModalOpen: true})}>View Routines</Button>
          <div>
          {/* <input type="test" onChange={handleTest} value={data} /> */}
          {/* <button onClick={saveRoutine}>Add Routine</button> */}
          {/* <button onClick={getRoutine}>Get Database</button> */}
        </div>
        </Grid>
          {viewModalOpen ? (
             <GetRoutineGrid
              viewModalOpen={viewModalOpen}
              setViewModalOpen={setViewModalOpen}
            />
          ) : null}
      </Container>
    </DragDropContext>
  );
}

export default App;
