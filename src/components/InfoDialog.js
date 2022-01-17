import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
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

  // const [currentValue, setCurrentValue] = useState(1);

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
<<<<<<< HEAD
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
=======
    setModalOpen(!modalOpen);
    setAddedTime(0);
    //setTotalTime(0);
    console.log(routine);
>>>>>>> applied new timer logic
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
            id={selectedPose.id}
            label="Seconds in pose"
            type="number"
            placeholder={`${selectedPose.defaultTime} seconds`}
            helperText={`Adjust time here.`}
            // defaultValue={selectedPose.defaultTime}
            //idea: helper text to give default time, then user chooses added seconds
            //value={addedTime} //routine[currentIndex].addedTime
            inputProps={{
              min: selectedPose.defaultTime,
              max: 500,
              step: 1
            }}
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
