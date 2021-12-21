import { React, Fragment, useState } from "react";
import { Modal, Grid, Box, Button, Container } from "@material-ui/core";
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
      <Container>
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
          <Grid container direction="row"  spacing={1}>
            <Grid item xs={2}>
              <img
                className="yogaPoseImages"
                src={`images/exsideanglepose.png`}
                alt="extended side angle"
              />
              </Grid>
            <Grid item xs={10}>
                <div>This is some modal content</div>
              </Grid>            
            <Grid item xs={12}>
                <input
                  className="inputStyle"
                  type="number"
                  min="0"
                  max="10"
                  step="1"
                />
              </Grid>
              <Grid item xs={4}>    
              <Button style={{ backgroundColor: "purple" }}>
                    Add Pose to Routine
                  </Button>
                  <Button style={{ backgroundColor: "white" }}>Cancel</Button>
                  </Grid>
              </Grid>
        </Box>
      </Modal>
      </Container>
    </Fragment>
  );
}

export default InfoModal;
