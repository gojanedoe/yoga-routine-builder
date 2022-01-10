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
    setPoseCounter,
    addedTime,
    setAddedTime
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
    setAddedTime(0);
  };

  const addTimeHandler = event => {
    if (event.target.value > 0) {
      setAddedTime(event.target.value);
    } else {
      setAddedTime(0);
    }
    console.log(event.target.value);
    console.log('selected pose:', {
      ...selectedPose,
      addedTime: event.target.value
    });
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
              alt="extended side angle"
            />
            {`${selectedPose.description}`}
          </DialogContentText>
          <TextField
            autoFocus
            className="textField"
            variant="outlined"
            margin="dense"
            id="seconds"
            label="Length of Pose"
            type="number"
            defaultValue={addedTime} //will eventually be {selectedPose.defaultTime}
            value={addedTime}
            inputProps={{ min: 0, max: 10, step: 1 }}
            onChange={addTimeHandler}
          />
          {/* needs capturing and sending over to Timer component */}
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
