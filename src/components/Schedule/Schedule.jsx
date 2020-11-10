import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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


const Schedule = (props) =>{
    const [dailyUpdate,setDailyUpdate] = useState(true);
    const [weeklyUpdate, setWeeklyUpdate] = useState(false);
    
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [time, setTime] = useState("00:00");

    const fromDateHandler = (e)=>{
        setFromDate(e.target.value);
    }

    const toDateHandler = (e)=>{
        setToDate(e.target.value);
    }
    const weeklyHandler = (e) => {
        setWeeklyUpdate(e.target.checked);
        setDailyUpdate(!e.target.checked);
    }
    const dailyHandler = (e) => {
        
        setWeeklyUpdate(!e.target.checked);
        setDailyUpdate(e.target.checked);
    }
    const classes = useStyles();
    return (<div id="query-ceator-container" className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <Typography>
                    Specify sync time
                </Typography>
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="date-from"
                label="From"
                type="date"
                value ={fromDate}
                onChange={fromDateHandler}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                style={{width:"30%"}} 
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="date-to"
                label="To"
                type="date"
                value ={toDate}
                onChange={toDateHandler}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                style={{width:"30%"}} 
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="time"
                label="Run Time"
                type="time"
                value={time}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
                style={{width:"30%"}} 
            />
            </Grid>
            <Grid item xs={12}>
            <Checkbox
                name="daily"
                checked={dailyUpdate}
                onChange = {dailyHandler}
               
             />
             <label>Every Day</label>
             <Checkbox
                name="weekly"
                checked={weeklyUpdate}
                onChange = {weeklyHandler}
                
             />
             <label>Every Week</label>
            </Grid>
        </Grid>
    </div>);
}

export default Schedule;