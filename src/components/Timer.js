<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> applied new timer logic
=======
>>>>>>> applied new timer logic
=======
>>>>>>> starting Timer build use this one
=======
>>>>>>> capturing user input in InfoDialog
import { React, useState } from 'react';

const Timer = props => {
  const { routine, selectedPose } = props;

  return (
    <div>
      Time Displayed:
      {routine.map(pose => {
        let timeDisplay = pose.defaultTime + pose.addedTime;
        //"mock" timer circle:
        return <p key={pose.id}>{timeDisplay}</p>;
      })}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> starting Timer build use this one
=======
import { useEffect } from 'react';

const Timer = props => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [timerSeconds, setTimerSeconds] = useState(33);
  const [timerIsRunning, setTimerisRunning] = useState(false);

  const {
    routine,
    timerIsRunning, //initialize to false
    timerSeconds, //setTimerSeconds(routine[index].defaultTime + routine[index].addedTime)
    setTimerSeconds,
    handleNextPhoto, //if/else or case/switch situation (carousel event?)
    resetTimer //resets setTimerSeconds to next index equation
=======
import { useEffect } from 'react';

const Timer = props => {
  const [timerSeconds, setTimerSeconds] = useState(33);
  const [timerIsRunning, setTimerisRunning] = useState(false);

  const {
    routine,
    timerIsRunning, //initialize to false
    timerSeconds, //setTimerSeconds(routine[index].defaultTime + routine[index].addedTime)
    setTimerSeconds,
<<<<<<< HEAD
    handleNextPhoto,
    resetTimer
>>>>>>> starting Timer build use this one
=======
    handleNextPhoto, //if/else or case/switch situation (carousel event?)
    resetTimer //resets setTimerSeconds to next index equation
>>>>>>> some psuedo code added
=======
=======
  const [timerSeconds, setTimerSeconds] = useState(33);
  const [timerIsRunning, setTimerisRunning] = useState(false);

>>>>>>> some psuedo code added
  const {
    routine,
    timerIsRunning, //initialize to false
    timerSeconds, //setTimerSeconds(routine[index].defaultTime + routine[index].addedTime)
    setTimerSeconds,
<<<<<<< HEAD
    handleNextPhoto,
    resetTimer
>>>>>>> starting Timer build use this one
=======
    handleNextPhoto, //if/else or case/switch situation (carousel event?)
    resetTimer //resets setTimerSeconds to next index equation
>>>>>>> some psuedo code added
  } = props;

  // Referenced from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
  useEffect(() => {
    let interval = null;

    if (timerIsRunning && timerSeconds !== 0) {
      interval = setInterval(() => {
        setTimerSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (timerIsRunning && timerSeconds <= 0) {
      handleNextPhoto('Next');
      resetTimer();
    } else if (!timerIsRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }

    // Clear interval if the component is unmounted
    return () => clearInterval(interval);
  }, [timerIsRunning, timerSeconds]);

  return <div className="Timer">:{timerSeconds}</div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> starting Timer build use this one
};

export default Timer;

/*
http://react-responsive-carousel.js.org/storybook/?path=/story/02-advanced--with-external-controls
next = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide + 1,
            }));
        };

prev = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide - 1,
            }));
        }; 
*/
=======
=======
>>>>>>> capturing user input in InfoDialog
// import { useEffect } from 'react';

// const Timer = props => {
//   const [timerIsRunning, setTimerisRunning] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// const [timerSeconds, setTimerSeconds] = useState(33);
=======
//   const [timerSeconds, setTimerSeconds] = useState(33);
>>>>>>> capturing user input in InfoDialog
=======
// const [timerSeconds, setTimerSeconds] = useState(33);
>>>>>>> some pair programming
=======
// const [timerSeconds, setTimerSeconds] = useState(33);
>>>>>>> some pair programming

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
<<<<<<< HEAD
>>>>>>> capturing user input in InfoDialog
=======
};

export default Timer;
>>>>>>> applied new timer logic
=======
};

export default Timer;
<<<<<<< HEAD
>>>>>>> starting Timer build use this one
=======

/*
http://react-responsive-carousel.js.org/storybook/?path=/story/02-advanced--with-external-controls
next = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide + 1,
            }));
        };

prev = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide - 1,
            }));
        }; 
*/
>>>>>>> some psuedo code added
=======
>>>>>>> capturing user input in InfoDialog
=======
=======
>>>>>>> starting Timer build use this one
>>>>>>> starting Timer build use this one
};

export default Timer;
<<<<<<< HEAD
>>>>>>> applied new timer logic
=======

/*
http://react-responsive-carousel.js.org/storybook/?path=/story/02-advanced--with-external-controls
next = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide + 1,
            }));
        };

prev = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide - 1,
            }));
        }; 
*/
<<<<<<< HEAD
>>>>>>> some psuedo code added
=======
=======
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
>>>>>>> capturing user input in InfoDialog
>>>>>>> capturing user input in InfoDialog
