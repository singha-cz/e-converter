import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Conversions from './components/Conversions/Conversions';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ConverterContextProvider } from './context/converter.context';

const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(5),
      backgroundColor: theme.palette.background.default,
   },
}));

const App = () => {
   const css = useStyles();
   return (
      <Box m={5}>
         <div style={{ display: "inline-block", minWidth: "560px" }}>
            <ConverterContextProvider>
               <Paper elevation={3} className={css.paper}>
                  <Typography variant="h5">Unit converter</Typography>
                  <Form />
                  <Conversions />
               </Paper>
            </ConverterContextProvider>
         </div>
      </Box>
   )
}

export default App;