import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ConverterContext } from '../../context/converter.context';

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
      value,
      valuesData,
      unit,
      amount,
      setValue,
      setUnit,
      setAmount,
      setSubmitted
   } = useContext(ConverterContext);

   const css = useStyles();
   const submit = (e) => {
      e.preventDefault()
   }

   const activeValue = valuesData.find(item => item.id === value);
   const unitOptions = activeValue ? activeValue.units : [];
   const submitDisabled = amount?.length === 0 || !value;
   return <div style={{ textAlign: "left", marginBottom: "3rem" }}>
      <Typography variant="h6">Value</Typography>
      <form className={css.root} noValidate autoComplete="off" onSubmit={submit}>
         <FormControl className={css.formControl}>
            <InputLabel id="amountLabel">Value</InputLabel>
            <Select
               value={value}
               onChange={(e) => setValue(e.target.value)}
               className={css.selectEmpty}
               inputProps={{
                  name: 'value',
                  id: 'value',
               }}
            >
               <MenuItem aria-label="None" value="" disabled>Select value</MenuItem>
               {
                  valuesData.map(item => <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>)
               }
            </Select>
         </FormControl>
         <FormControl className={css.formControl}>
            <TextField
               id="standard-basic"
               label="Amount"
               placeholder="Enter amount"
               value={amount}
               type="number"
               onChange={(e) => setAmount(e.target.value)}
            />
         </FormControl>
         <FormControl className={css.formControl}>
            <InputLabel id="unitLabel">Unit</InputLabel>
            <Select
               value={unit}
               onChange={(e) => setUnit(e.target.value)}
               className={css.selectEmpty}
               inputProps={{
                  name: 'unit',
                  id: 'unit',
               }}
            >
               <MenuItem aria-label="None" value="" disabled>Select unit</MenuItem>
               {
                  unitOptions.map(item => <MenuItem key={item.id} value={item.id}>{item.id} ({item.symbol})</MenuItem>)
               }
            </Select>
         </FormControl>
         <br /><br />
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