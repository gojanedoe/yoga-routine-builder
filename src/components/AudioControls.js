import React from 'react';
// import { ReactComponent as Play } from './assets/play.svg';

const AudioControls = props => {
  const { isPlaying, setIsPlaying, onPrevClick, onNextClick } = props;

  const onPlayPause = e => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-controls">
      <button
        type="button"
        className="play"
        onClick={onPlayPause}
        aria-label="Play"
      >
        Play/Pause
      </button>
    </div>
  );
};

export default AudioControls;
