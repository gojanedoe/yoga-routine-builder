import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AudioPlayer from 'material-ui-audio-player';
import NewPlayerCarousel from './NewPlayerCarousel';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

function SimpleDialog(props) {
  const { onClose, routine, open } = props;
  const handleClose = () => {
    onClose(routine);
  };

  return (
    <Dialog fullScreen onClose={handleClose} open={open}>
      <DialogTitle>Routine Playback</DialogTitle>
      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <NewPlayerCarousel />
      <AudioPlayer
        elevation={1}
        width="500px"
        variation="primary"
        spacing={3}
        src="Assets/tree_(vrkasana).mp4"
      />
    </Dialog>
  );
}

export default SimpleDialog;
