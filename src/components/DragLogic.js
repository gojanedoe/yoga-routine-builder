import React, { useState } from 'react';
import DraggablePoseCard from './DraggablePoseCard';
import PoseBank from './PoseBank';
import RoutineBuilder from './RoutineBuilder';
import '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { Container } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import yogaPoses from './data/yogaPoses.json';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import '../App.css';

function DragLogic({ children, poses, routine, updatePoses, updateRoutine }) {
  // const [poses, updatePoses] = useState(yogaPoses);
  // const [routine, updateRoutine] = useState([]);

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
    <DragDropContext onDragEnd={handleOnDragEnd}>{children}</DragDropContext>
  );
}

export default DragLogic;
