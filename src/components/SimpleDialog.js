import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AudioPlayer from 'material-ui-audio-player';
import NewPlayerCarousel from './NewPlayerCarousel';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PoseTimer from './PoseTimer';
import Grid from '@material-ui/core/Grid';
import './PoseTimer.css';

function SimpleDialog(props) {
  const { onClose, routine, open } = props;
  const handleClose = () => {
    onClose(routine);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <Dialog
      fullScreen
      onClose={handleClose}
      open={open}
      style={{ textAlign: 'center' }}
    >
      <Grid Title>
        <h1>Play your routine</h1>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <item>
            <AudioPlayer
              elevation={1}
              width="500px"
              variation="primary"
              spacing={3}
              src="Assets/tree_(vrkasana).mp4"
              style={{ textAlign: 'center' }}
            />
          </item>
        </Grid>
        <Grid item xs={4}>
          <div className="player">
            <PoseTimer expiryTimestamp={time} />
            {/* <OriginTimer expiryTimestamp={time} />  this was an experiment where I learned that the buttons don't
    work when it is position over the carousel, and only work when under*/}
          </div>
        </Grid>
        <Grid item xs={4}>
          <item>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style={{ color: 'red' }}
            >
              <CloseIcon />
              Close Routine
            </IconButton>
          </item>
        </Grid>
      </Grid>
      <Grid>
        <NewPlayerCarousel routine={routine} />
      </Grid>
    </Dialog>
  );
}

export default SimpleDialog;
