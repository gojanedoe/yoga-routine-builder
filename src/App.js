import React, { useState } from 'react';
import PoseBank from './components/PoseBank';
import RoutineBuilder from './components/RoutineBuilder';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import yogaPoses from './data/yogaPoses.json';
import DragLogic from './components/DragLogic';
<<<<<<< HEAD
<<<<<<< HEAD
import InfoDialog from './components/InfoDialog.js';
=======
import InfoDialog from './InfoDialog.js';
>>>>>>> some psuedo code added
=======
import InfoDialog from './components/InfoDialog.js';
>>>>>>> capturing user input in InfoDialog
import Timer from './components/Timer.js';

import './App.css';

function App() {
  const [poses, updatePoses] = useState(yogaPoses);
  const [routine, updateRoutine] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPose, setSelectedPose] = useState(null);
  const [poseCounter, setPoseCounter] = useState(10);
<<<<<<< HEAD
  const [addedTime, setAddedTime] = useState(0);
<<<<<<< HEAD
  const [timerRunning, setTimerRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const startRoutineHandler = () => {
    setTimerRunning(!timerRunning);
  };
=======
>>>>>>> capturing user input in InfoDialog
=======
  const [addedTime, setAddedTime] = useState(0); //(...selectedPose, addedTime: addedTime)
>>>>>>> some pair programming

  return (
    
    <DragLogic
      poses={poses}
      updatePoses={updatePoses}
      routine={routine}
      updateRoutine={updateRoutine}
      poseCounter={poseCounter}
      setPoseCounter={setPoseCounter}
    >
      
      <Container className="landingContainer">
<<<<<<< HEAD
<<<<<<< HEAD
        {/* <Timer routine={routine} /> */}
=======
        <Timer routine={routine} />
>>>>>>> some psuedo code added
=======
        {/* <Timer routine={routine} /> */}
>>>>>>> capturing user input in InfoDialog
        {modalOpen ? (
          <InfoDialog
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            selectedPose={selectedPose}
            updateRoutine={updateRoutine}
            poseCounter={poseCounter}
            setPoseCounter={setPoseCounter}
            addedTime={addedTime}
            setAddedTime={setAddedTime}
<<<<<<< HEAD
<<<<<<< HEAD
            routine={routine}
            totalTime={totalTime}
            setTotalTime={setTotalTime}
=======
>>>>>>> capturing user input in InfoDialog
=======
            routine={routine}
>>>>>>> Grab index of currently chosen pose
          />
        ) : null}
        {timerRunning ? (
          <Timer routine={routine} selectedPose={selectedPose} />
        ) : null}
        <Grid
          container
          className="landingGrid"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {/* ---- LEFT COLUMN ---- */}
          <PoseBank
            poses={poses}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
            setSelectedPose={setSelectedPose}
          />
          {/* ---- MIDDLE COLUMN ---- */}
          <Grid item xs={4}>
            →
          </Grid>
          {/* ---- RIGHT COLUMN ---- */}
          <RoutineBuilder
            routine={routine}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
            setSelectedPose={setSelectedPose}
          />

          <Button variant="outlined" onClick={startRoutineHandler}>
            Start Routine
          </Button>
          <Button variant="outlined">Save Routine</Button>
        </Grid>
      </Container>
    </DragLogic>
  );
}

export default App;
