import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import './DraggablePoseCard.css';
import CardHeader from '@material-ui/core/CardHeader';
import CloseButton from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const DraggablePoseCard = ({
  pose,
  modalOpen,
  setModalOpen,
  setSelectedPose,
  routine,
  updateRoutine,
  deletable,
  index
}) => {
  const [isDeletable, setIsDeletable] = useState(deletable);

  const handleCloseButton = () => {
    updateRoutine(prevRoutine => {
      prevRoutine.splice(index, 1);
      return [...prevRoutine];
    });
  };

  const handleButtonClick = () => {
    setModalOpen(!modalOpen);
    setSelectedPose(pose);
  };

  return (
    <Card sx={{ maxWidth: 1 }} elevation={3}>
      {isDeletable && (
        <CardHeader
          action={
            <IconButton onClick={handleCloseButton}>
              <CloseButton></CloseButton>
            </IconButton>
          }
        ></CardHeader>
      )}
      <CardContent className="contentContainer">
        <Typography variant="h5" component="div" className="header">
          {pose.name}
        </Typography>
        <CardMedia
          component="img"
          title={pose.name}
          height="150"
          image={pose.image}
          alt={pose.name}
          className="pic"
        />
      </CardContent>
      <CardActions>
        {isDeletable ? 
        <Button size="small" id="link" onClick={handleButtonClick}>
        Update Pose
      </Button>
        :
        <Button size="small" id="link" onClick={handleButtonClick}>
          Learn More
        </Button>}
      </CardActions>
    </Card>
  );
};

export default DraggablePoseCard;
