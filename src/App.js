
import Rightbar from './components/Rightbar';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import {Box, createTheme, Stack, ThemeProvider} from '@mui/material';
import Add from './components/Add';
import { useState } from 'react';



function App(){
  const [mode, setMode] = useState("light")

  const ChangeMode = ()=>{
    setMode(prev =>{
     if(prev === "dark"){
      prev = "light"
     } else {
      prev = "dark"
     }
     return prev 
    })
  }

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <SideBar mode={mode} setMode={setMode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
