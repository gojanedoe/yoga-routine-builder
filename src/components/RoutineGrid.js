import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//firebase
import database from '../firebase';
import { ref, set, onValue, update, remove, get, child, push } from 'firebase/database';

const GetRoutineGrid = (props) => {

    const {
        viewModalOpen,
        setViewModalOpen,
    } = props;

    const [displayData, setDisplayData] = useState({ displayData: [] });

    const handleRoutinesClose = () => {
        setViewModalOpen(false);
    };

    useEffect(() => {
        const dbRef = ref(database, '/');

        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();

            setDisplayData({ displayData: data });
        });
    }, [])


    return (
        <div>
            <Dialog
                open={viewModalOpen}
                onClose={handleRoutinesClose}
                aria-labelledby="form-dialog-title"
                fullWidth="false"
                maxWidth="lg"
            >
                <DialogTitle id="form-dialog-title">Saved Routines</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        {displayData.length !== 0 ? displayData.map((routine, index) =>{
                            console.log(routine[index]);
                        }) : <p>hi!</p>}
                        {/* {if(displayData.length !== 0) {
                            displayData.forEach((routine, index) => {
                                <Grid item xs={6}>
                                    <div>
                                        {routine[index].forEach((poses, index) => {
                                            <p>{poses[index].name}</p>
                                        })}
                                    </div>
                                </Grid>
                            })}
                        else {<p>Hi!</p>}} */}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRoutinesClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}


export default GetRoutineGrid;