import React, {useState} from 'react';
const QuantContext = React.createContext([{}, ()=>{}]);

const quantsData = [
   { 
      id: "length", 
      label: "Length", 
      units: [
         {id: "meters", k: 1, symbol: "m"}, 
         {id: "inches", k: 0.0254, symbol: 'in'}, 
         {id: "feet", k: 0.3, symbol: 'ft'}, 
         {id: "miles", k: 1600, symbol: "mi"}
      ] 
   },
   { 
      id: "area", 
      label: "Area",
      units: [
         {id: "square meters", k: 1, symbol: `m2`}, 
         {id: "hectars", k: 10000, symbol: "ha"}, 
         {id: "acres", k: 4046.86, symbol: "ac"}, 
      ]       
   },
   { 
      id: "volume", 
      label: "Volume", 
      units: [
         {id: "liters", k: 1, symbol: "l"}, 
         {id: "gallons", k: 4.546, symbol: "ga"}, 
         {id: "pints", k: 0.568, symbol: "pt"}
      ]             
   },
   { 
      id: "temperature", 
      label: "Temperature", 
      units: [
         {id: "Celsius", k: 1, symbol: "°C"}, 
         {id: "Farenheit", k: 1.8, offset: 32, symbol: "°F"}, 
      ]       
   },
   { 
      id: "time", 
      label: "Time", 
      units: [
         {id: "seconds", k: 1, symbol: "s"}, 
         {id: "minutes", k: 60, symbol: "m"}, 
         {id: "hours", k: 3600, symbol: "h"}, 
         {id: "days", k: 24*3600, symbol: "d"}, 
         {id: "months", k: 30*24*3600, symbol: "m"}, 
         {id: "years", k: 365*24*3600, symbol: "y"}, 
      ]       
   }
];

const QuantContextProvider = (props) => {
   const [quant, setQuant] = useState("");
   const [quants, ] = useState(quantsData);
   const [unit, setUnit] = useState("");
   const [value, setValue] = useState("");
   const [submitted, setSubmitted] = useState(false);

   const changeQuant = (quantId) => {
      setSubmitted(false);
      setQuant(quantId);
      const currentQuant = quants.find(item => item.id === quantId);
      const stdUnit = currentQuant.units.find(item => item.k === 1);
      setUnit(stdUnit.id)
   }
   return (
      <QuantContext.Provider value={
         {
            quant: quant,
            quants: quants,
            unit: unit,
            submitted: submitted,
            value: value,
            setQuant: changeQuant,
            setSubmitted: setSubmitted,
            setValue: setValue,
            setUnit: setUnit
         }
      } >
         {props.children}
      </QuantContext.Provider>
   )
}

export {QuantContext, QuantContextProvider}