import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AudioPlayer from 'material-ui-audio-player';

function SimpleDialog(props) {
    const { onClose, routine, open } = props;
  const handleClose =() =>{
    onClose(routine)
  }
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Routine Playback</DialogTitle>
       
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