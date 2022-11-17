import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function MediaCard() {
  return (
    <Card sx={{ minWidth: 345, height:660}}>
      {/* <CardMedia
        component="img"
        height="530"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h3>The All-in-One Sales<br/>CRM to Streamline your Business</h3>
        <h5>Accelerate your sales cycle and increase your win rate</h5>
        <p>--------------------------------------------------------<br/>
        Focus on the right leads and opportunities<br/>
        -----------------------------------------------------------<br/>
        Manage your pipeline and forecast<br/>
        -----------------------------------------------------------<br/>
        Engage prospects anytime, anywhere<br/>
        -----------------------------------------------------------</p>
        <h5>For Contact</h5><br/>
        <Button><AddIcCallIcon/>&nbsp;</Button>
        <Button><InstagramIcon/>&nbsp;</Button>
        <Button><LinkedInIcon/>&nbsp;</Button>
        <Button><YouTubeIcon/>&nbsp;</Button>
        </Typography>
      </CardContent>
    </Card>
  );
}