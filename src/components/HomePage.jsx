import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import axios from 'axios';
import { CardActions, Grid }  from '@mui/material';
const HomePage = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
      axios.get(' https://fakestoreapi.com/products')
        .then((res) => {
          setRows(res.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
return (
  <Grid  container spacing={3} justifyContent="center">
    {rows.map((row) => (
      <Grid  style={{marginTop:"3%"}} item key={row.id} xs={12} sm={6} md={5} lg={5}>
        <Card style={{borderBlock:"4px solid red",borderLeft:"4px solid red ",borderRight:"4px solid  red "}}  sx={{backgroundColor:'black',height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent  sx={{ flexGrow: 1 }}>
            <Typography style={{color:'white'}} gutterBottom variant="h5" component="div">
              {row.title}
            </Typography>
            <Typography style={{color:'white'}} variant="body2" color="text.secondary">
              Category: {row.category}
            </Typography>
            <Typography style={{color:'white'}} variant="body2" color="text.secondary">
              Image: {row.image}
            </Typography>
            <Typography style={{color:'white'}} variant="body2" color="text.secondary">
              Price: {row.price}
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
)
}

export default HomePage