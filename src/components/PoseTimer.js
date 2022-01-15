import React from 'react';
import { useTimer } from 'react-timer-hook';
import "./PoseTimer.css";
 
 
function PoseTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
// alternative to current time - round progress button: https://www.youtube.com/watch?v=B1tjrnX160k
// timer buttons not working because of their location on page...timer needs to be lower than thumbs
 
return (
    <div style={{textAlign: 'center'}}>
      {/* <h3>Time left in pose:</h3> */}
      <div className="countdown" style={{fontSize: '25px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Time left in pose' : 'Paused'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}
 
export default PoseTimer;
