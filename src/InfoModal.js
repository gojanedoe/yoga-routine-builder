import { React, Fragment, useState } from "react";
import { Modal, Grid, Box, Button } from "@material-ui/core";
import {
  display,
  flexbox,
  width,
  height,
  justifyContent,
  zIndex,
} from "@material-ui/system";
import "./InfoModal.css";

function InfoModal(props) {
  const {} = props;
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Fragment>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box width="60%" height="70%" display="block">
          <Grid container spacing={1}>
            <Grid item>
              <img
                className="yogaPoseImages"
                src={`images/exsideanglepose.png`}
                alt="extended side angle"
              />
              <Grid item>
                <input
                  className="inputStyle"
                  type="number"
                  min="0"
                  max="10"
                  step="1"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <div>This is some modal content</div>
                  <Button style={{ backgroundColor: "purple" }}>
                    Add Pose to Routine
                  </Button>
                  <Button style={{ backgroundColor: "white" }}>Cancel</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default InfoModal;
