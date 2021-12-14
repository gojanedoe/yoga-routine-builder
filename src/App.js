import React, { useState } from 'react';
import DraggablePoseCard from './components/DraggablePoseCard';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './App.css';

const dummyPoses = [
  { id: 'pose-1', name: 'Pose 1' },
  { id: 'pose-2', name: 'Pose 2' },
  { id: 'pose-3', name: 'Pose 3' },
  { id: 'pose-4', name: 'Pose 4' },
  { id: 'pose-5', name: 'Pose 5' }
];

function App() {
  const [poses, updatePoses] = useState(dummyPoses);

  const handleOnDragEnd = result => {
    console.log('Draggable item move: \n', result);

    // If pose is not dragged to a valid destination, keep list the same
    if (!result.destination) return;

    const items = Array.from(poses);
    // Grab moving pose & remove from list
    const [reorderedItem] = items.splice(result.source.index, 1);
    // Add moving pose to new spot (index) in list
    items.splice(result.destination.index, 0, reorderedItem);

    //Update state
    updatePoses(items);
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
          <Grid item xs={4} className="landingColumn">
            <Droppable droppableId="column-1">
              {provided => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {poses.map((pose, index) => {
                    return (
                      <Draggable
                        key={pose.id}
                        draggableId={pose.id}
                        index={index}
                      >
                        {provided => (
                          <li
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Card elevation={2}>{pose.name}</Card>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
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
    </DragDropContext>
  );
}

export default App;
