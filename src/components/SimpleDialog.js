import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewPlayerCarousel from './NewPlayerCarousel';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TimerAndAudio from './PoseTimer';
import PoseTimer from './PoseTimer';
import Grid from '@material-ui/core/Grid';
import './PoseTimer.css';

function SimpleDialog(props) {
  const { onClose, routine, open, selectedPose } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  const expiryTime = new Date();
  expiryTime.setSeconds(
    expiryTime.getSeconds() +
      routine[slideIndex].defaultTime +
      routine[slideIndex].addedTime
  );

  const handleClose = () => {
    onClose(routine);
    setSlideIndex(0);
  };

  const handleNextSlide = () => {
    // If routine is over, alert and end
    if (slideIndex === routine.length - 1) {
      alert('Great workout!');
      return;
    }

    // Go to next slide
    setSlideIndex(prevIndex => {
      return prevIndex + 1;
    });
  };

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
            <p>Placeholder</p>
          </item>
        </Grid>
        <Grid item xs={4}>
          <div className="player">
            <TimerAndAudio
              handleNextSlide={handleNextSlide}
              routine={routine}
              slideIndex={slideIndex}
              audioSrc={
                routine.length === 0
                  ? 'Assets/tree_(vrkasana).mp4'
                  : routine[slideIndex].audio
              }
              expiryTimestamp={expiryTime}
            />
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
        <NewPlayerCarousel
          routine={routine}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
      </Grid>
    </Dialog>
  );
}

export default SimpleDialog;
