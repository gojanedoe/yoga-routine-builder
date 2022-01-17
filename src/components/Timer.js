import { React, useState } from 'react';

const Timer = props => {
  const { routine, selectedPose } = props;

  return (
    <div>
      Time Displayed:
      {routine.map(pose => {
        let timeDisplay = pose.defaultTime + pose.addedTime;
<<<<<<< HEAD
=======
        //"mock" timer circle:
>>>>>>> c127490101ef84e4d6f1f6520bb994c02034e4af
        return <p key={pose.id}>{timeDisplay}</p>;
      })}
    </div>
  );
};

export default Timer;
