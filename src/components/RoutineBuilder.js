import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const RoutineBuilder = ({ routine }) => {
  return (
    <Grid item xs={4} className="landingColumn">
      <Droppable droppableId="column-2">
        {provided => (
          <ul
            // className="poseList"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {routine.map((routinePose, index) => {
              return (
                <Draggable
                  key={routinePose.id}
                  draggableId={routinePose.id}
                  index={index}
                >
                  {provided => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Card elevation={2}>{routinePose.name}</Card>
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

export default RoutineBuilder;
