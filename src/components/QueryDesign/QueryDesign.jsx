import React ,{useEffect, useRef, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HorizontalLinearStepper from '../stepper/stepper';
import DataTable from '../DataTable/DataTable';
import CreateQuery from '../CreateQuery/CreateQuery';
import PreviewQuery from '../PreviewQuery/PreviewQuery';
import Schedule from '../Schedule/Schedule';
import Layout from '../Layout/Layout'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const QueryDesign = ()=>{
    const classes = useStyles();
    const [databaseSchema, setDatabaseSchema] = useState(null);
    const [queryText, setQueryText] = useState(null);

    const [wizardCurrentStep,setWizardCurrentStep] = useState(0);
    const [queryTitle,setQueryTitle] = useState("");
    const [queryCommand,setQueryCommand] = useState("");

    const handleWizardStepChange = (step) => {
        setWizardCurrentStep(step);
    }
    const headers = [
        { field: 'id', headerName: '#', width: 70 },
        { field: 'dbInstance', headerName: 'Database Instance', width: 200  },
        { field: 'description', headerName: 'Description', width: 220 },
        { field: 'type', headerName: 'Type', width: 170  },
        { field: 'key', headerName: 'key', width: 170, hide:true  }
    ];
    const rows = [ 
        { id: 1, dbInstance: 'Live Data SQL', description: 'Performce data for vessels', type: 'MSSQL', key:"a" },
        { id: 2, dbInstance: 'Vessel Map SQL', description: 'Data for the Vessel Map', type: 'MySQL', key:"b" },
        { id: 3, dbInstance: 'Danaos', description: 'Danaos Data', type: 'Oracle',key:"c" }
    ];

    const rowsSelected = useRef({});

    const [dbOptionsTableRows, setdbOptionsTableRows] = useState(rows);
    const dbSelectionChanged = (rows)=>{
       rowsSelected.current = rows;
       console.log(rowsSelected.current);
        
        // setRowsSelected(state=>{
        //     debugger;
        //     var newItems = [];
        //     rowsSelected.forEach(y=>{
        //         var item = state.filter(x =>x.id == y.id );
        //         if(item !=null){
        //             newItems.push(item);
        //         }
        //     });
        //     if (newItems.length > 0 || state.length ==0) {
        //         return newItems;
        //     }
        // });
    };
    console.log(["Parent",queryTitle])
    console.log(["Parent",queryCommand])
    return (
       
        <div id="query-design-container" className={useStyles.root}>
            <Layout>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <HorizontalLinearStepper stepHandler={setWizardCurrentStep} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:"1%"}}>
                        <Paper className={classes.paper}>
                                Step Selected :{wizardCurrentStep}
                                {
                                       (function(){
                                           switch (wizardCurrentStep){
                                                case 0:
                                                    return <DataTable headers={headers} data={rows} onRowSelected={ dbSelectionChanged}/>
                                                case 1:
                                                    return <CreateQuery 
                                                                queryTitleHandler={setQueryTitle} 
                                                                queryCommandHandler={setQueryCommand}
                                                                queryCommand={queryCommand}
                                                                queryTitle={queryTitle}/>
                                                case 2:
                                                    return <PreviewQuery 
                                                                QueryTitle={queryTitle}
                                                                QueryCommand={queryCommand}/>
                                                case 3: 
                                                    return  <div>
                                                            <Schedule/>
                                                                <Grid container>
                                                                    <Grid item xs={12}>
                                                                        <Button variant="contained" color="primary">Save Query</Button>
                                                                    </Grid>
                                                                </Grid></div>
                                                default:
                                                return null
                                                }
                                       })()
                                }
                                
                        </Paper>
                    </Grid>
                </Grid>
            </Layout>
        </div>
    )
}

export default QueryDesign;