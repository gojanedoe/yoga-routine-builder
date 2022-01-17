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
};

export default Timer;
