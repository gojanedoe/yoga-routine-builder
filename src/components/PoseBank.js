import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import DraggablePoseCard from './DraggablePoseCard';

<<<<<<< HEAD



const PoseBank = ({ poses }) => {

=======
const PoseBank = ({ poses, setModalOpen, modalOpen, setSelectedPose }) => {
>>>>>>> Add pose to routine when info modal button is clicked
  // console.log(poses)  (accesses array of poses)

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
<<<<<<< HEAD
                      <DraggablePoseCard pose = {pose} />
=======
                      <DraggablePoseCard
                        pose={pose}
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        setSelectedPose={setSelectedPose}
                      />
>>>>>>> Add pose to routine when info modal button is clicked
                      {/* <Card elevation={2}>{pose.name}</Card> */}
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
