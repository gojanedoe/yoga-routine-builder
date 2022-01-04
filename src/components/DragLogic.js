import React from 'react';
import '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';

import '../App.css';

function DragLogic({ children, poses, routine, updatePoses, updateRoutine }) {
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
    } else {
      // Grab poses from original lists, depending on source
      const fromItems = Array.from(source === 'column-1' ? poses : routine);
      const toItems = Array.from(source === 'column-1' ? routine : poses);

      // Grab moving pose & remove from list
      const [reorderedItem] = fromItems.splice(sourceIndex, 1);

      // Add moving pose to new spot (index) in list
      toItems.splice(destinationIndex, 0, reorderedItem);

      //Update state
      updatePoses(source === 'column-1' ? fromItems : toItems);
      updateRoutine(source === 'column-1' ? toItems : fromItems);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>{children}</DragDropContext>
  );
}

export default DragLogic;
