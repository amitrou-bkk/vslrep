import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Multiselect from "../../components/Multiselect/Multiselect";

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
const vesselsList = [
    { title: 'MARAN GAS AGAMEMNON', year: 1994 },
    { title: 'MARAN TRITON', year: 1972 },
    { title: 'MARAN GAS PERICLES', year: 1974 },
    { title: 'ANANGEL GLORY', year: 2008 },
    { title: 'ANANGEL HERO', year: 1957 }]
const CreateQuery = (props) => {
    const classes = useStyles();
    const [queryTitleText, setqueryTitleText] = React.useState(()=>{
        return props? props.queryTitle :"";
    });
    const [queryCommandText, setqueryCommandText] = React.useState(()=>{
        return props? props.queryCommand :"";
    });
    
    const parentQueryTitleNotify = props.queryTitleHandler;
    const parentQueryCommandNotify = props.queryCommandHandler;

    const queryTitleHandler = (e) => {
        
        console.log(e.target.value);
        setqueryTitleText(e.target.value);
        parentQueryTitleNotify(e.target.value)
    }
    const queryCommandHandler = (e) => {
        setqueryCommandText(e.target.value);
        parentQueryCommandNotify(e.target.value)
    }
    return(
        <div id="query-ceator-container" className={classes.root}>
            <Grid container >
                <Grid item xs={12}>
                    <TextField  
                        id="query-title" 
                        label="Query Title" 
                        style={{width:"50%"}} 
                        value={queryTitleText}
                        onChange={queryTitleHandler}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="query-body"
                        label="Query"
                        multiline
                        rowsMax={18}
                        style={{width:"50%"}}
                        variant="outlined"
                        value={queryCommandText}
                        onChange={queryCommandHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div style={{width:"100%"}}>
                    <Multiselect id="vessels-select" label="Vessels" values={vesselsList}/> 
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreateQuery;