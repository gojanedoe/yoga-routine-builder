import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import "./DraggablePoseCard.css";
import yogaPoses from '../data/yogaPoses.json';



const DraggablePoseCard = ({pose, linkToModal}) => {

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
                    image = {pose.image}
                    // image="data:image/jpeg;base64,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"
                    alt="pose image"  
                    className="pic" />
          </CardContent> 
      
          <CardActions>
            
            <Button size="small" id="link">Learn More</Button>
            
          </CardActions>
      </Card>
    )
}

export default DraggablePoseCard;