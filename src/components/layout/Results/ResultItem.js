import React from 'react';
import { Container, Typography, Card, Grid, TextField, Button,Divider } from '@material-ui/core'
import style from './style.js'


  const ResultItem = ({ resultData }) =>{
  const classes = style();
  return (
    <Card className={classes.cardDay}>
      <Grid xs={12}>
        <Typography variant="h6" align="center">{resultData.Title}</Typography>
      </Grid>
      <Divider></Divider>
      <Grid className={classes.buttonsContainer} xs={12} >
        <img src={resultData.Poster}></img>
      </Grid>
      <Grid container xs={12}>
        <Grid xs={6}>{resultData.Type}</Grid>
        <Grid xs={6}>{resultData.Year}</Grid>
      </Grid>
    </Card>
  );
}
export default ResultItem;