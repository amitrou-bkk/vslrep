import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    margin:"0px auto",
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  formControl :{
      width:"75%"
  }
  },
}));


const PreviewQuery = (props) =>{
    const classes = useStyles();
    return (<div id="query-ceator-container" className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <div style={{width:"100%", textAlign:"center", padding:"1%"}}>
                    Name: {props.QueryTitle}
                </div>
                <div style={{width:"100%", textAlign:"center", padding:"1%"}}>
                    <div style={{width:"50%", margin:"0px auto"}}>{props.QueryCommand}</div>
                </div>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">
                    Test Query
                </Button>
            </Grid>
        </Grid>
    </div>);
}

export default PreviewQuery;