import { AppBar, Box, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem,} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import { padding, styled } from '@mui/system'
//import { InputBase } from '@mui/material';
import React, {useState} from 'react'



const StyleToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: "space-between"
})

const Search = styled('div')(({theme})=>({
  backgroundColor:"white",
  paddingLeft: "20px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box) (({theme})=>({
  display:"none",
  gap: "20px", 
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
  
}))

const UserBox = styled(Box)(({theme})=>({
  display: "flex", 
  gap: "20px", 
  alignItems: "center",
  [theme.breakpoints.up('sm')]:{
    display:"none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky' >
      <StyleToolbar>
        <Typography variant='h6' sx={{display:{xs:'none', sm:"block"}}}>NicTech</Typography>
        <PetsIcon sx={{display:{xs:"block", sm:'none'}}}/>
        <Search><InputBase placeholder='Search'/></Search>
        <Icons>
        <Badge badgeContent={5} color="error">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={5} color="error">
            <NotificationsNoneIcon/>
        </Badge>
        <Avatar onClick={e=>setOpen(true)} sx={{width:"30px", height:"30px"}} src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width:"30px", height:"30px"}} src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <Typography>Oppong</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e=>setOpen(false)}
        open={open}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'Right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar> 
  )
}

export default Navbar