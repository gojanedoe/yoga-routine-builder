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

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

//firebase
import database from './firebase';
import { ref, set, onValue, update, remove, get, child, push } from 'firebase/database';

import DragLogic from './components/DragLogic';
import InfoDialog from './InfoDialog.js';
import './App.css';

function App() {
  const [poses, updatePoses] = useState(yogaPoses);
  const [routine, updateRoutine] = useState([]);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPose, setSelectedPose] = useState(null);
  const [poseCounter, setPoseCounter] = useState(10);

    const saveRoutine = () => {

      push(ref(database, '/'), {
        Routine: Array.from(routine)
      })
    }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = value => {
    setOpen(false);
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

          <Button
            variant="outlined"
            onClick={handleClickOpen}
            disabled={routine.length === 0 ? true : false}
          >
            Start Routine
          </Button>

          <SimpleDialog routine={routine} open={open} onClose={handleClose} />

          <Button 
          variant="outlined" 
          disabled={routine.length === 0 ? true : false}
          onClick={saveRoutine}>Save Routine</Button>
          <Button variant="outlined" onClick={() => setViewModalOpen({viewModalOpen: true})}>View Routines</Button>
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
