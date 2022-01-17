import { React, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
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

  const [audioCounter, setAudioCounter] = useState(10);
  const [ready, setReady] = useState(false);
  const [audioState, setAudioState] = useState();

  const ffmpeg = createFFmpeg({ log: true });

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const handleClose = () => {
    setModalOpen(!modalOpen);
  };

  const addTimeHandler = event => {
    setAddedTime(Number(event.target.value) - selectedPose.defaultTime);
    //setTotalTime(selectedPose.defaultTime + addedTime);
  };

  // async function mergeAudio() {
  //   // const fs = require('fs');

  //   let audio1 = selectedPose.audio;
  //   let audio2 = 'resources/1-second-of-silence.mp3';
  //   await ffmpeg.load();
  //   ffmpeg.FS('writeFile', `${audio1}`, await fetchFile(audio1));
  //   ffmpeg.FS('writeFile', `${audio2}`, await fetchFile(audio2));
  //   let newAudioId = `${selectedPose.name}-${Math.random() * 100}.mp3`;
  //   for (let i = 0; i < selectedPose.addedTime; i++) {
  //     await ffmpeg.run(
  //       '-i',
  //       `${audio2}`,
  //       '-i',
  //       `${audio2}`,
  //       '-c',
  //       'copy',
  //       `${newAudioId}`
  //     );
  //   }
  //   let data = await ffmpeg.FS('readFile', `${newAudioId}`);
  //   return new Uint8Array(data.buffer);
  // }

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
    // console.log(mergeAudio());
    //setTotalTime(0);
  };

  return ready ? (
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
          {audioState && (
            <audio>
              <source
                src={URL.createObjectURL(audioState)}
                type="audio/mpeg"
              ></source>
            </audio>
          )}
          <input
            type="file"
            onChange={e => setAudioState(e.target.files?.item(0))}
          />
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
  ) : (
    <p>Loading...</p>
  );
}

export default InfoDialog;
