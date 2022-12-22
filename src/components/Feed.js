import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Post from './Post'
const Feed = () => {
  return (
    <Box flex={4} p={2}>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </Box>
  )
}

export default Feed