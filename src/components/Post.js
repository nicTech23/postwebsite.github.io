import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox,  IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Post = () => {
  return (
    <Box>
         <Card sx={{margin:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:'red'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
       </Card>
    </Box>
  )
}

export default Post