import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AudioPlayer from 'material-ui-audio-player';
import NewPlayerCarousel from './NewPlayerCarousel';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PoseTimer from './PoseTimer';
import Grid from '@material-ui/core/Grid';
import './PoseTimer.css';

function SimpleDialog(props) {
  const { onClose, routine, open, selectedPose } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const time = new Date();
  time.setSeconds(
    time.getSeconds() +
      routine[slideIndex].defaultTime +
      routine[slideIndex].addedTime
  );

  //I don't know how to resume audio after pause because I think it's a built-in functionality of the player that I don't know how to manipulate, so each audio file is restarting after 'pause' from the timer controls

  // const handlePauseSD = () => {
  //   setIsPaused(true);
  // };

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
            {isPaused ? null : (
              <AudioPlayer
                elevation={1}
                width="60px"
                variation="primary"
                spacing={3}
                src={
                  routine.length === 0
                    ? 'Assets/tree_(vrkasana).mp4'
                    : routine[slideIndex].audio
                }
                style={{ textAlign: 'center' }}
                autoplay={true}
                displaySlider={false}
              />
            )}
          </item>
        </Grid>
        <Grid item xs={4}>
          <div className="player">
            <PoseTimer
              handleNextSlide={handleNextSlide}
              routine={routine}
              expiryTimestamp={time}
              slideIndex={slideIndex}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
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
