import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import SimpleDialog from "./SimpleDialog";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import './RoutineGrid.css';

//firebase
import database from '../firebase';
import { ref, set, onValue, update, remove, get, child, push } from 'firebase/database';

const GetRoutineGrid = (props) => {

    const {
        viewModalOpen,
        setViewModalOpen,
    } = props;

    const [displayData, setDisplayData] = useState({ displayData: [] });
    const [routi, updateRouti] = useState([]);
    const [open, setOpen] = React.useState(false);

    function handlePlay(routine){
        updateRouti(routine)
        setOpen(true)
    };
    
    const handleClose = () => {
        setOpen(false)
    }

    const handleRoutinesClose = () => {
        setViewModalOpen(false);
    };

    useEffect(() => {
        const dbRef = ref(database, '/');

        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            let data1 = JSON.parse(JSON.stringify(data));
            setDisplayData({ displayData: data1 });
        });
    }, [])

    const deleteHandler = (id) => {

        remove(ref(database, `/${id}`));
  
    }



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
                    <Grid container spacing={2}>
                            {displayData["displayData"].length !== 0 ? Object.keys(displayData["displayData"]).map(index =>{
                                return (
                                    <Grid item xs={4}>
                                        <div>
                                        <Card className="root">
                                            <CardActionArea>
                                                <CardMedia
                                                className="media"
                                                image={displayData["displayData"][index]["Routine"][0].image}
                                                title={`Routine ${index}`}
                                                />
                                            </CardActionArea>
                                            <CardActions>
                                                <Button onClick={e => {e.preventDefault(); handlePlay(displayData["displayData"][index]["Routine"])}} size="small" color="primary">
                                                    Play
                                                </Button>
                                                {routi.length === 0 ? null : (
                                                    <SimpleDialog routine={routi} open={open} onClose={handleClose} />
                                                )}
                                                <Button onClick={e => {e.preventDefault(); deleteHandler(index)}} size="small" color="secondary">
                                                    Delete
                                                </Button>
                                            </CardActions>
                                            </Card>
                                        </div>
                                    </Grid>
                                )
                            }) : <p>Hi!</p>}
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