import React from 'react';
import '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';

import '../App.css';

function DragLogic({
  children,
  poses,
  routine,
  updatePoses,
  updateRoutine,
  poseCounter,
  setPoseCounter
}) {
  const handleOnDragEnd = result => {
    // If pose is not dragged to a valid destination, keep list the same
    if (!result.destination) return;

    // Otherwise, if pose is dragged to valid destination, add or reorder pose cards
    const source = result.source.droppableId;
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const sourceItems = Array.from(source === 'column-1' ? poses : routine);

    if (source === 'column-2') {
      // reorder pose within column
      const [reorderedItem] = sourceItems.splice(sourceIndex, 1);
      sourceItems.splice(destinationIndex, 0, reorderedItem);

      updateRoutine(sourceItems);
    } else if (source === 'column-1') {
      // Create new pose id so there are no repeating keys in poses
      const newPoseId = `pose-${poseCounter + 1}`;
      setPoseCounter(poseCounter + 1);

      // Drop pose in other list
      const destinationItems = Array.from(routine);
      const itemCopy = { ...sourceItems[sourceIndex], id: newPoseId };
      destinationItems.splice(destinationIndex, 0, itemCopy);

      updateRoutine(destinationItems);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>{children}</DragDropContext>
  );
}

export default DragLogic;
