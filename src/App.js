import React, { useState } from 'react';
import PoseBank from './components/PoseBank';
import RoutineBuilder from './components/RoutineBuilder';
import SimpleDialog from './components/SimpleDialog';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import yogaPoses from './data/yogaPoses.json';
import GetRoutineGrid from './components/RoutineGrid';

//firebase
import database from './firebase';
import {
  ref,
  set,
  onValue,
  update,
  remove,
  get,
  child,
  push
} from 'firebase/database';

import DragLogic from './components/DragLogic';
import InfoDialog from './components/InfoDialog.js';

import './App.css';

function App() {
  const [poses, updatePoses] = useState(yogaPoses);
  const [routine, updateRoutine] = useState([]);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPose, setSelectedPose] = useState(null);
  const [poseCounter, setPoseCounter] = useState(10);
  const [addedTime, setAddedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [open, setOpen] = React.useState(false);


  const saveRoutine = () => {
    push(ref(database, '/'), {
      Routine: Array.from(routine)
    });
    clearRoutine();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = value => {
    setOpen(false);
  };

  const clearRoutine = () => {
    updateRoutine([]);
  };

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
            routine={routine}
            totalTime={totalTime}
            setTotalTime={setTotalTime}
          />
        ) : null}
        <Grid
          container
          className="landingGrid"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
        <Grid item xs={12}><h1>Build a Yoga Routine</h1></Grid>
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
            <p>
              Create your routine by dragging the desired pose to the routine
              builder, rearrange as needed or remove poses.
            </p>
          </Grid>
          {/* ---- RIGHT COLUMN ---- */}
          <RoutineBuilder
            routine={routine}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
            setSelectedPose={setSelectedPose}
            updateRoutine={updateRoutine}
          />
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            disabled={routine.length === 0 ? true : false}
          >
            Start Routine
          </Button>

          {routine.length === 0 ? null : (
            <SimpleDialog routine={routine} open={open} onClose={handleClose} />
          )}

          <Button
            variant="outlined"
            disabled={routine.length === 0 ? true : false}
            onClick={saveRoutine}
          >
            Save Routine
          </Button>
          <Button variant="outlined" onClick={clearRoutine}>
            Clear Routine
          </Button>
          <Button
            variant="outlined"
            onClick={() => setViewModalOpen({ viewModalOpen: true })}
          >
            View Routines
          </Button>
        </Grid>
        {viewModalOpen ? (
          <GetRoutineGrid
            viewModalOpen={viewModalOpen}
            setViewModalOpen={setViewModalOpen}
          />
        ) : null}
      </Container>
    </DragLogic>
  );
}

export default App;
