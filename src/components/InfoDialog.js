import { React, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
    setAddedTime,
    routine,
    totalTime,
    setTotalTime
  } = props;

  const handleClose = () => {
    setModalOpen(!modalOpen);
  };

  const addTimeHandler = event => {
    setAddedTime(Number(event.target.value) - selectedPose.defaultTime);
    //setTotalTime(selectedPose.defaultTime + addedTime);
  };

  const handleAddToRoutine = e => {
    updateRoutine(prevState => {
      // Create new pose id so there are no repeating keys in poses
      let newPoseId = `pose-${poseCounter + 1}`;
      let newPose = {
        ...selectedPose,
        id: newPoseId,
        addedTime: Number(addedTime)
        //totalTime: Number(totalTime)
      };

      prevState.push(newPose);
      return prevState;
    });

    setPoseCounter(poseCounter + 1);
    setModalOpen(!modalOpen);
    setAddedTime(0);
    console.log(routine);
    //setTotalTime(0);
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
          <Grid>
            <Grid item>
              <DialogContentText>
                <img
                  className="yogaPoseImages"
                  src={selectedPose.image}
                  alt="extended side angle"
                />
                <Grid item>{`${selectedPose.benefits}`}</Grid>
              </DialogContentText>
            </Grid>
            <Grid item>
              <TextField
                autoFocus
                className="textField"
                variant="outlined"
                margin="dense"
                id={selectedPose.id}
                label="Seconds in pose"
                type="number"
                placeholder={`${
                  selectedPose.defaultTime + selectedPose.addedTime
                } seconds`}
                helperText={`Adjust time here.`}
                // defaultValue={selectedPose.defaultTime}
                //value={addedTime} //routine[currentIndex].addedTime
                inputProps={{
                  min: selectedPose.defaultTime,
                  max: 500,
                  step: 1
                }}
                onChange={addTimeHandler}
              />
            </Grid>
          </Grid>
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
