import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react'

const SideBar = ({mode, setMode}) => {
  return (
    <Box 
          flex={1} p={2}
          sx={{display:{xs:'none', sm:"block"}}}>
     <Box position='fixed'>
     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#page'>
              <ListItemIcon>
                <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#Marketplace'>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#people'>
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#proflie'>
              <ListItemIcon>
                <Person2Icon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#setting'>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#setting'>
              <ListItemIcon>
              <DarkModeIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light" )}/>
            </ListItemButton>
          </ListItem>
        </List>
     </Box>
    </Box>
  )
}

export default SideBar