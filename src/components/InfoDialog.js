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
    addedTime2,
    setAddedTime2,
    routine
  } = props;

  const [currentIndex, setCurrentIndex] = useState(
    routine.findIndex(pose => pose.id === selectedPose.id)
  );

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
    // setAddedTime(0);
  };

  const addTimeHandler = event => {
    // Check right column poses (routine state) to find the current pose's placement

    setCurrentIndex(routine.findIndex(pose => pose.id === selectedPose.id));
    //let currentIndex = routine.findIndex(pose => pose.id === selectedPose.id);

    setAddedTime2(event.target.value);

    console.log('current index', currentIndex);

<<<<<<< HEAD
    if (event.target.value > 0) {
      setAddedTime(event.target.value);
    } else {
      setAddedTime(0);
    }
<<<<<<< HEAD
=======
=======
    // Update routine with newly timed pose
    // setAddedTime(event.target.value);
    let updatedPose = {
      ...selectedPose,
      addedTime: Number(event.target.value)
    };

    updateRoutine(prevRoutine => {
      prevRoutine.splice(currentIndex, 1, updatedPose);
      return prevRoutine;
    });

>>>>>>> Add and save time to individual poses
    console.log(event.target.value);
    console.log('selected pose:', {
      ...selectedPose,
      addedTime: event.target.value
    });
<<<<<<< HEAD
>>>>>>> some pair programming
=======

    console.log(routine);
    console.log(
      'routine added time at curr index: ',
      routine[currentIndex].addedTime
    );
>>>>>>> Add and save time to individual poses
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
            defaultValue={selectedPose.defaultTime} //will eventually be {selectedPose.defaultTime}
            value={routine[currentIndex].addedTime} //routine[currentIndex].addedTime
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
