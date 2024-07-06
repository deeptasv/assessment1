import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const AddProducts = () => {
  
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
   
      <div>
      <TextField
        required
        id="outlined-required"
        label="Name"
        defaultValue=""
      />
      </div>
      <div>
      <TextField
        required
        id="outlined-required"
        label="Description"
        defaultValue=""
      />
      </div>
      <div>
      <TextField
        required
        id="outlined-required"
        label="Price"
        defaultValue=""
      />
      </div>
      <div>
      <TextField
        required
        id="outlined-required"
        label="Category"
        defaultValue=""
      />
      </div>
    <Button style={{backgroundColor:"black",color:"white"}}>Add Movie</Button>
  </Box>
  )
}

export default AddProducts