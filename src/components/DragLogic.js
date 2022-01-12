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
    // const {source, destination} = result;

    // If pose is not dragged to a valid destination, keep list the same
    if (!result.destination) return;

    const source = result.source.droppableId;
    const sourceIndex = result.source.index;
    const destination = result.destination.droppableId;
    const destinationIndex = result.destination.index;
    const sourceItems = Array.from(source === 'column-1' ? poses : routine);
    const destinationItems = Array.from(routine);

    // TODO
    // Make a placeholder copy stay in play on drag

    if (source === destination) {
      const [reorderedItem] = sourceItems.splice(sourceIndex, 1);

      sourceItems.splice(destinationIndex, 0, reorderedItem);

      source === 'column-1'
        ? updatePoses(sourceItems)
        : updateRoutine(sourceItems);
    } else if (source === 'column-1') {
      // Create new pose id so there are no repeating keys in poses
      const newPoseId = `pose-${poseCounter + 1}`;
      setPoseCounter(poseCounter + 1);

      // Drop pose in other list
      const itemCopy = { ...sourceItems[sourceIndex], id: newPoseId };
      destinationItems.splice(destinationIndex, 0, itemCopy);

      updateRoutine(destinationItems);
    }

    // // Grab poses from original lists, depending on source
    // const fromItems = Array.from(source === 'column-1' ? poses : routine);
    // const toItems = Array.from(source === 'column-1' ? routine : poses);

    // // Grab moving pose & remove place in list
    // const [reorderedItem] = fromItems.splice(sourceIndex, 1);

    // if (source === destination) {
    //   // Drop pose back in same list
    //   fromItems.splice(destinationIndex, 0, reorderedItem);

    //   //Update pose bank or pose routine state
    //   source === 'column-1' ? updatePoses(fromItems) : updateRoutine(fromItems);
    // } else {
    //   // Drop pose in other list
    //   toItems.splice(destinationIndex, 0, reorderedItem);

    //   //Update pose bank and pose routine state
    //   updatePoses(source === 'column-1' ? fromItems : toItems);
    //   updateRoutine(source === 'column-1' ? toItems : fromItems);
    // }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>{children}</DragDropContext>
  );
}

export default DragLogic;
