import React, { useState, useEffect, useRef } from 'react';
import AudioControls from './AudioControls';

const AudioPlayerScratch = props => {
  const { audioSrc, slideIndex, routine, handleNextSlide } = props;
  //const [trackIndex, setTrackIndex] = useState(0); This (I think) will be tracked with slideIndex
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioSrc)); //sets audioRef to current Audio object

  const intervalRef = useRef(); //To add in maybe later when accounting for added and default time. Used for tracking place in playback of audio file

  const isReady = useRef(false);

  const { duration } = audioRef.current; //used for slider, which we probably won't use. May be helpful in feeding timestamp into timer. Is a property on an Audio object

  //used to start or stop (pause) audio when the play or pause button is clicked
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  //this is doing some cleanup when the component unmounts. When unmounting, we want to make sure to pause the track and clear any setInterval timers that might be running
  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current); //clearInterval is a DOM method
    };
  }, []);

  //runs when the trackIndex (slideIndex?) state changes. It allows us to pause the currently playing track, update the value of the audioRef to a new source, reset the progress state, and set the new track to play.
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      //startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true; //why is this initiated as useRef and not useState?
    }
  }, [slideIndex]); //slideIndex

  return (
    <div className="audio-player">
      <AudioControls
        isPlaying={isPlaying}
        onPrevClick={handleNextSlide}
        onNextClick={handleNextSlide}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default AudioPlayerScratch;
