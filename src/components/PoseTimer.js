import { React, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import AudioPlayer from 'material-ui-audio-player';
import './PoseTimer.css';

//Bug: Timer is pausing between poses when the timer expires and when new slide is chosen manually
//onPlayed in AudioPlayer is conflicting with useEffect restart timestamp; causing slides to not update their time and flow from one to the other with a 0-second timestamp. Goal: resume timer function after a pause

function PoseTimer({ expiryTimestamp, handleNextSlide, routine, slideIndex }) {
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => handleNextSlide()
    });

  // alternative to current time - round progress button: https://www.youtube.com/watch?v=B1tjrnX160k
  // timer buttons not working because of their location on page...timer needs to be lower than thumbs

  useEffect(() => {
    const time = new Date();
    time.setSeconds(
      time.getSeconds() +
        routine[slideIndex].defaultTime +
        routine[slideIndex].addedTime
    );
    restart(time);
    console.log('I started');
  }, [slideIndex, routine]);

  const handlePause = () => {
    // setIsPaused(!isPaused);
    pause();
  };

  const handleResume = () => {
    // setIsPaused(!isPaused);
    resume();
    console.log('I resumed');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="countdown" style={{ fontSize: '25px' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Time left in pose' : 'Paused'}</p>
      {/* <button onClick={handleStart}>Start</button> */}
      {/* <button onClick={handlePause}>Pause</button> */}
      <button onClick={handleResume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
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
        onPaused={handlePause}
        // onPlayed={resume}
      />
    </div>
  );
}

export default PoseTimer;
