import {  Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent:"center",
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: 10,
    margin:"0 0 20px 0"
})



const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom:"20px", left:{xs:150, md:20}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>

        
        <StyleModal 
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} sx={{width:{xs:300, sm:400}, height:{xs:280, sm:280}}}>
                <Typography variant='h6' textAlign='center'>Create Post</Typography>
                <UserBox>
                    <Avatar 
                        src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Typography variant='span'>Oppong Nicholas</Typography>
                </UserBox>
                <TextField sx={{width:'100%'}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What is on your mind?"
                    variant="standard"
                />
                <Stack direction='row' gap={2} mt={2} mb={3}>
                    <EmojiEmotionsIcon color='primary'/>
                    <PhotoSizeSelectActualIcon color='secondary'/>
                    <VideoCameraBackIcon color='success'/>
                    <PersonAddIcon color='error'/>
                </Stack>
                <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
                    <Button >Post</Button>
                    <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
                </ButtonGroup>
            </Box>
        </StyleModal>
    </>
  )
}

export default Add