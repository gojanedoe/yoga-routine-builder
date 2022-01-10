// import { useEffect } from 'react';

// const Timer = props => {
//   const [timerIsRunning, setTimerisRunning] = useState(false);
//   const [timerSeconds, setTimerSeconds] = useState(33);

//   const {
//     routine,
//     timerIsRunning, //initialize to false
//     timerSeconds, //setTimerSeconds(routine[index].defaultTime + routine[index].addedTime)
//     setTimerSeconds,
//     handleNextPhoto, //if/else or case/switch situation (carousel event?)
//     resetTimer //resets setTimerSeconds to next index equation
//   } = props;

//   // Referenced from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
//   useEffect(() => {
//     let interval = null;

//     if (timerIsRunning && timerSeconds !== 0) {
//       interval = setInterval(() => {
//         setTimerSeconds(prevSeconds => prevSeconds - 1);
//       }, 1000);
//     } else if (timerIsRunning && timerSeconds <= 0) {
//       handleNextPhoto('Next');
//       resetTimer();
//     } else if (!timerIsRunning && timerSeconds !== 0) {
//       clearInterval(interval);
//     }

//     // Clear interval if the component is unmounted
//     return () => clearInterval(interval);
//   }, [timerIsRunning, timerSeconds]);

//   return <div className="Timer">:{timerSeconds}</div>;
// };

// export default Timer;

// /*
// http://react-responsive-carousel.js.org/storybook/?path=/story/02-advanced--with-external-controls
// next = () => {
//             this.setState((state) => ({
//                 currentSlide: state.currentSlide + 1,
//             }));
//         };

// prev = () => {
//             this.setState((state) => ({
//                 currentSlide: state.currentSlide - 1,
//             }));
//         };
// */
