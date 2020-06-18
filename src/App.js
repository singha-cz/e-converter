import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Results from './components/Conversions/Conversions';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { QuantContextProvider} from './context/quants.context';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   paper: {
      padding: theme.spacing(5),
      backgroundColor: theme.palette.background.default,
   },
}));

const App = () => {
   const css = useStyles();
   return (
      <Box m={5}>
         <div style={{display: "inline-block", minWidth: "560px"}}>
            <QuantContextProvider>
               <Paper elevation={3} className={css.paper}>
                  <Grid container>
                     <Grid item xs={6}>
                        <Form />
                     </Grid>
                     <Grid item xs={6}>
                        <Results />
                     </Grid>
                  </Grid>
               </Paper>
            </QuantContextProvider>
         </div>
      </Box>
   )
}

export default App;