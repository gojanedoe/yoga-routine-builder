import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RoutineBuilder from './RoutineBuilder';
import './InfoDialog.css';

function InfoDialog(props) {
  const {
    modalOpen,
    setModalOpen,
    selectedPose,
    updateRoutine,
    poseCounter,
    setPoseCounter,
    isDeletable
  } = props;

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
        <DialogTitle id="form-dialog-title">{selectedPose.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img
              className="yogaPoseImages"
              src={selectedPose.image}
              alt={selectedPose.name}
            />
            {`${selectedPose.description}`}
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="seconds"
            label="Length of Pose"
            type="time"
            min=":00"
            max="1:00"
            step="1"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* if not deletable do not display add to routine button */}
          {/* <Button onClick={e => handleAddToRoutine(e)} color="primary">
            Add to Routine
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InfoDialog;
