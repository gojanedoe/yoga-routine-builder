import React, { useEffect, useState, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import AudioControls from './AudioControls';
import './PoseTimer.css';

const TimerAndAudio = props => {
  const { handleNextSlide, routine, slideIndex, audioSrc, expiryTimestamp } =
    props;
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => handleNextSlide()
    });
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioSrc)); //sets audioRef to current Audio object
  const intervalRef = useRef(); //To add in maybe later when accounting for added and default time. Used for tracking place in playback of audio file

  const isReady = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      resume();
    } else {
      pause();
      audioRef.current.pause();
    }
  }, [slideIndex, isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current); //clearInterval is a DOM method
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      const time = new Date();
      time.setSeconds(
        time.getSeconds() +
          routine[slideIndex].defaultTime +
          routine[slideIndex].addedTime
      );
      restart(time);
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [slideIndex]);

  const AudioPlayerScratch = () => {
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

  const PoseTimer = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="countdown" style={{ fontSize: '25px' }}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? 'Time left in pose' : 'Paused'}</p>
      </div>
    );
  };

  return (
    <div>
      <AudioPlayerScratch />
      <PoseTimer />
    </div>
  );
};

export default TimerAndAudio;

// alternative to current time - round progress button: https://www.youtube.com/watch?v=B1tjrnX160k
