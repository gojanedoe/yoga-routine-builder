import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import DraggablePoseCard from './DraggablePoseCard';


const PoseBank = ({ poses, setModalOpen, modalOpen, setSelectedPose }) => {
  return (
    <Grid item xs={4} className="landingColumn">
      <Droppable droppableId="column-1" isDropDisabled={true}>
        {provided => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {poses.map((pose, index) => {
              return (
                <Draggable key={pose.id} draggableId={pose.id} index={index}>
                  {(provided, snapshot) => (
                    <>
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
                        deletable={false}
                        
                        />
                      </li>
                      {/* Copy of card left in place when above card is being dragged*/}
                      <li>
                        {snapshot.isDragging && (
                          <DraggablePoseCard
                            pose={pose}
                            modalOpen={modalOpen}
                            setModalOpen={setModalOpen}
                            setSelectedPose={setSelectedPose}
                            deletable = {false}
                          />
                        )}
                      </li>
                    </>
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
