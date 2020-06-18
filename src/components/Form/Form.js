import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { QuantContext} from '../../context/quants.context';

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   selectEmpty: {
      marginTop: theme.spacing(2)
   },
}));

const Form = () => {
   const {
      quant, 
      quants,
      unit,
      value,
      setQuant,
      setUnit,
      setValue,
      setSubmitted
   } = useContext(QuantContext);

   const css = useStyles();
   // const [unitOptions, setUnitOptions] = useState([]);

   const changeQuant = (e) => {
      if (e){
         const value = e.target.value;
         // const unitOptions = quants.find(item => item.id === value).units ;
         // setUnitOptions(unitOptions);
         setQuant(value)
      }
   }

   const submit = (e) =>{
      e.preventDefault()
   }

   const activeQuant = quants.find(item => item.id === quant);
   const unitOptions = activeQuant? activeQuant.units: [];
   const submitDisabled = value?.length === 0 || !quant;
   return <div style={{textAlign: "left"}}>
         <h3>Value</h3>
         <form className={css.root} noValidate autoComplete="off" onSubmit={submit}>
            <Select
               native
               value={quant}
               onChange={changeQuant}
               className={css.selectEmpty}
               inputProps={{
                  name: 'quant',
                  id: 'quant',
               }}
            >
               <option aria-label="None" value="" disabled>Select value</option>
               {
                  quants.map(item => <option key={item.id} value={item.id}>{item.label}</option>)
               }
            </Select>
            <br/>
            <TextField 
               id="standard-basic" 
               label="Amount" 
               placeholder="Enter amount" 
               value={value} 
               type="number"
               onChange={(e) => setValue(e.target.value)} 
            />
            <br/>
            <Select
               native
               value={unit}
               onChange={(e) => setUnit(e.target.value)}
               className={css.selectEmpty}
               inputProps={{
                  name: 'unit',
                  id: 'unit',
               }}
            >
               <option aria-label="None" value="" disabled>Select unit</option>
               {
                  unitOptions.map(item => <option key={item.id} value={item.id}>{item.id} ({item.symbol})</option>)
               }
            </Select>   
            <br/><br/>   
            <Button 
               variant="contained" 
               color="primary" 
               disabled={submitDisabled}
               onClick={() => setSubmitted(true)}
               size="large"
            >
               Convert
            </Button>                     
         </form>         
   </div>
}

export default Form;