import React from 'react';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Item from '@material-ui/core/Grid';
import { borders } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div>
        <Grid container spacing={2}>
          <Grid className="poseList" container item xs={4}>
            <Paper>xs=8</Paper>
          </Grid>
          <Grid container item xs={4}>
            <Box border={5}>xs=8</Box>
          </Grid>
          <Grid container item xs={4}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
