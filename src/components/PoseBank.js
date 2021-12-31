import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import DraggablePoseCard from './DraggablePoseCard';

const PoseBank = ({ poses, setModalOpen, modalOpen, setSelectedPose }) => {
  return (
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
                <Draggable key={pose.id} draggableId={pose.id} index={index}>
                  {provided => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <DraggablePoseCard
                        pose={pose}
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        setSelectedPose={setSelectedPose}
                      />
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
  );
};

export default PoseBank;
