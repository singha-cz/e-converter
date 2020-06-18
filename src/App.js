import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Results from './components/Results/Results';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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

const App = () => {
   return (
      <Container>
         <Grid container>
            <Grid item xs={6}>
               <Form />
            </Grid>
            <Grid item xs={6}>
               <Results />
            </Grid>
         </Grid>
      </Container>
   )
}

export default App;