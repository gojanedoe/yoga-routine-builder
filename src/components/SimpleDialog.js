 
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AudioPlayer from 'material-ui-audio-player';
import NewPlayerCarousel from './NewPlayerCarousel';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PoseTimer from './PoseTimer';
import { useTimer } from 'react-timer-hook';
import Grid from '@material-ui/core/Grid';
import red from "@material-ui/core/colors/green";
 
 
function SimpleDialog(props) {
  const { onClose, routine, open } = props;
  const handleClose = () => {
    onClose(routine);
  };
 
  const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
 
       
     
 
  return (
    <Dialog fullScreen onClose={handleClose} open={open} style={{textAlign: 'center'}}>
      <DialogTitle className="routine">Play Routine</DialogTitle>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>      
          <item>
            <AudioPlayer
              elevation={1}
              width="500px"
              variation="primary"
              spacing={3}
              src="Assets/tree_(vrkasana).mp4"
              style={{textAlign: 'center'}}
            />
          </item>
          </Grid>
        <Grid item xs={3}>
          <item>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style={{ color: "red" }}
            >
            <CloseIcon />
              Close Routine
            </IconButton>
          </item>
        </Grid>
      </Grid>
   
    <NewPlayerCarousel />
    <div className ="player">
    <PoseTimer expiryTimestamp={time} />
     
      </div>
    </Dialog>
  );
}
 
export default SimpleDialog;

