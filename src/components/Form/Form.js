import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   selectEmpty: {
      marginTop: theme.spacing(2)
   },
}));

const quants = [
   { 
      id: "length", 
      label: "Délka", 
      units: [
         {id: "m", k: 1}, 
         {id: "palce", k: 0.3}, 
         {id: "stopy", k: 0.6}, 
         {id: "míle", k: 1600}
      ] 
   },
   { 
      id: "surface", 
      label: "Povrch", 
      units: [
         {id: "m2", k: 1}, 
         {id: "hektar", k: 0.3}, 
         {id: "akr", k: 0.6}, 
      ]       
   },
   { 
      id: "volume", 
      label: "Objem", 
      units: [
         {id: "litr", k: 1}, 
         {id: "galon", k: 0.3}, 
         {id: "akr", k: 0.6}, 
      ]             
   },
   { 
      id: "temperature", 
      label: "Teplota", 
      units: [
         {id: "°C", k: 1}, 
         {id: "°F", k: 0.3}, 
      ]       
   },
   { 
      id: "time", 
      label: "Čas", 
      units: [
         {id: "sekundy", k: 1}, 
         {id: "minuty", k: 0.3}, 
         {id: "hodiny", k: 0.3}, 
         {id: "dny", k: 0.3}, 
         {id: "týdny", k: 0.3}, 
         {id: "měsíce", k: 0.3}, 
         {id: "roky", k: 0.3}, 
      ]       
   }
];


const Form = () => {
   const classes = useStyles();
   const [quant, setQuant] = useState("");
   const [unit, setUnit] = useState("");
   const [unitOptions, setUnitOptions] = useState([]);

   const changeQuant = (e) => {
      if (e){
         const value = e.target.value;
         const unitOptions = quants.find(item => item.id === value).units ;
         setUnitOptions(unitOptions);
         setQuant(value)
      }
   }
   return <div>
         <form className={classes.root} noValidate autoComplete="off">
            <Select
               native
               value={quant}
               onChange={changeQuant}
               className={classes.selectEmpty}
               inputProps={{
                  name: 'quant',
                  id: 'quant',
               }}
            >
               <option aria-label="None" value="">Vyberte veličinu</option>
               {
                  quants.map(item => <option key={item.id} value={item.id}>{item.label}</option>)
               }
            </Select>
            <br/>
            <TextField id="standard-basic" label="Zadejte hodnotu" />
            <br/>
            <Select
               native
               value={unit}
               onChange={(e) => setUnit(e.target.value)}
               className={classes.selectEmpty}
               inputProps={{
                  name: 'unit',
                  id: 'unit',
               }}
            >
               <option aria-label="None" value="">Vyberte jednotku</option>
               {
                  unitOptions.map(item => <option key={item.id} value={item.id}>{item.id}</option>)
               }
            </Select>   
            <br/><br/>   
            <Button variant="outlined" color="primary" href="#contained-buttons">
              Převést
            </Button>                     
         </form>         
   </div>
}

export default Form;