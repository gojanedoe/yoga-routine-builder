import React, { useState } from 'react';
import DraggablePoseCard from './DraggablePoseCard';
import PoseBank from './PoseBank';
import RoutineBuilder from './RoutineBuilder';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import yogaPoses from '../data/yogaPoses.json';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AudioPlayer from 'material-ui-audio-player';
import '../App.css';


function SimpleDialog(props) {
    const { onClose, routine, open } = props;
  const handleClose =() =>{
    onClose(routine)
  }
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Routine Playback</DialogTitle>
      
  
          <AudioPlayer
            elevation={1}
            width="500px"
            variation="primary"
            spacing={3}
            src="Assets/tree_(vrkasana).mp4"
          />
      </Dialog>
    );
  }

  export default SimpleDialog;
