import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const DraggablePoseCard = () => {



    return (
        <Card sx={{ maxWidth: 300 }} elevation={3}>
          <CardContent>
            <table>
              <tr>
                <td>
                  <Typography variant="h5" component="div">
                  Pose Name
                  {/* {actual pose name will be in curly braces here instead of "Pose Name"} */}
                  </Typography>
                </td>
                <td>     </td>
                <td>
                  <img src="images/treeposegeneric.png" alt="pose name" />
                  {/* for delete icon and button, this video takes through coding: https://www.youtube.com/watch?v=M75MUZ1zVYM */}
                </td>
            </tr>
          </table>
          </CardContent> 
      
          <CardActions>
            
            <Button size="small">Learn More</Button>
            {/* This will open pose information */}
          </CardActions>
      </Card>
    )
}

export default DraggablePoseCard;