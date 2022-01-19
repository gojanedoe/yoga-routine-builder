import { React, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import './PoseTimer.css';

//What information does SimpleDialog need from InfoDialog to function/show Timer timestamps accurately?

//What event listener needs to be tweaked so that we move to the next slide on timer end rather than audio end?

function PoseTimer({
  expiryTimestamp,
  handleNextSlide,
  routine,
  slideIndex,
  setSlideIndex,
  isPaused,
  setIsPaused,
  test,
  setTest,
  onExpireTestFunction
}) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart
  } = useTimer({
    expiryTimestamp,
    onExpire: () => handleNextSlide()
  });

  // () => console.warn(test)
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
  }, [slideIndex]);

  //onPause function: call pause on timer AND pause audio(if applicable)
  //How is audio paused right now?

  const handlePause = () => {
    setIsPaused(!isPaused);
    pause();
  };

  const handleResume = () => {
    setIsPaused(!isPaused);
    resume();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="countdown" style={{ fontSize: '25px' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Time left in pose' : 'Paused'}</p>
      <button onClick={start}>Start</button>
      <button onClick={handlePause}>Pause</button>
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
    </div>
  );
}

export default PoseTimer;
