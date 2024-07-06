import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Box   sx={{ flexGrow: 1 }}>
    <AppBar style={{backgroundColor:"black"}} position="static">
      <Toolbar>
      <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PRODUCT APP
        </Typography>
       <Link to={'/'}><Button style={{color:'white'}}>View products</Button></Link>
       <Link to={'/add'}><Button style={{color:'white'}}>Add products</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar