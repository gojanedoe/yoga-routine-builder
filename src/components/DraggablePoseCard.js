import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import './DraggablePoseCard.css';
import yogaPoses from '../data/yogaPoses.json';

const DraggablePoseCard = ({ pose, modalOpen, setModalOpen }) => {
  const handleButtonClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Card sx={{ maxWidth: 1 }} elevation={3}>
      <CardContent className="contentContainer">
        <Typography variant="h5" component="div" className="header">
          {pose.name}
        </Typography>
        <CardMedia
          component="img"
          title="Pose"
          height="150"
          image={pose.image}
          alt="pose image"
          className="pic"
        />
      </CardContent>
      <CardActions>
        <Button size="small" id="link" onClick={handleButtonClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DraggablePoseCard;
