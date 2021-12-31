import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './InfoDialog.css';

function InfoDialog(props) {
  const {
    modalOpen,
    setModalOpen,
    selectedPose,
    updateRoutine,
    poseCounter,
    setPoseCounter
  } = props;

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleAddToRoutine = e => {
    updateRoutine(prevState => {
      // Create new pose id so there are no repeating keys in poses
      let newPoseId = `pose-${poseCounter + 1}`;
      let newPose = { ...selectedPose, id: newPoseId };

      prevState.push(newPose);
      return prevState;
    });

    setPoseCounter(poseCounter + 1);
    setModalOpen(false);
  };

  return (
    <div>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="false"
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Yoga Pose</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img
              className="yogaPoseImages"
              src={`images/exsideanglepose.png`}
              alt="extended side angle"
            />
            Here is some modal content.
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="seconds"
            label="Length of Pose"
            type="number"
            min="0"
            max="10"
            step="1"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={e => handleAddToRoutine(e)} color="primary">
            Add to Routine
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InfoDialog;
