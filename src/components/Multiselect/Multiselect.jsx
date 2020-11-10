/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { removeUndefinedProps } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function MultipleSelect(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{width:"100%", margin:"0px auto"}}>
      <Autocomplete
        multiple
        id={props.id}
        options={props.values}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={props.label}
            placeholder="Vessels"
            style={{width:"50%"}}
          />
        )}
      />
      
    </div>
  );
}