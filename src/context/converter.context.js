import React, { useState } from 'react';
const ConverterContext = React.createContext([{}, () => { }]);

const tempMatrix = [
   {
      id: "Celsius",
      calcs: {
         Celsius: "x",
         Farenheit: "x * 1.8 + 32",
         Kelvin: "x + 273.15"
      }
   },
   {
      id: "Farenheit",
      calcs: {
         Celsius: "(x - 32) / 1.8",
         Kelvin: "(x + 459.67) * 5/9",
         Farenheit: "x"
      }
   },
   {
      id: "Kelvin",
      calcs: {
         Farenheit: "x * 9/5 - 459.67",
         Celsius: "x - 273.15",
         Kelvin: "x"
      }
   },
]

const valuesData = [
   {
      id: "length",
      label: "Length",
      units: [
         { id: "meters", k: 1, symbol: "m" },
         { id: "inches", k: 0.0254, symbol: 'in' },
         { id: "feet", k: 0.3, symbol: 'ft' },
         { id: "miles", k: 1600, symbol: "mi" }
      ]
   },
   {
      id: "area",
      label: "Area",
      units: [
         { id: "square meters", k: 1, symbol: `m2` },
         { id: "hectars", k: 10000, symbol: "ha" },
         { id: "acres", k: 4046.86, symbol: "ac" },
      ]
   },
   {
      id: "volume",
      label: "Volume",
      units: [
         { id: "liters", k: 1, symbol: "l" },
         { id: "gallons", k: 4.546, symbol: "gal" },
         { id: "pints", k: 0.568, symbol: "pt" }
      ]
   },
   {
      id: "temperature",
      label: "Temperature",
      units: [
         { id: "Celsius", k: 1, symbol: "°C" },
         { id: "Farenheit", symbol: "°F" },
         { id: "Kelvin", symbol: "K" },
      ]
   },
   {
      id: "time",
      label: "Time",
      units: [
         { id: "seconds", k: 1, symbol: "s" },
         { id: "minutes", k: 60, symbol: "m" },
         { id: "hours", k: 3600, symbol: "h" },
         { id: "days", k: 24 * 3600, symbol: "d" },
         { id: "months", k: 30 * 24 * 3600, symbol: "m" },
         { id: "years", k: 365 * 24 * 3600, symbol: "y" },
      ]
   }
];

const ConverterContextProvider = (props) => {
   const [value, setValue] = useState("");
   const [unit, setUnit] = useState("");
   const [amount, setAmount] = useState("");
   const [submitted, setSubmitted] = useState(false);

   const changeValue = (valueId) => {
      setSubmitted(false);
      setValue(valueId);
      const currentValue = valuesData.find(item => item.id === valueId);
      const stdUnit = currentValue.units.find(item => item.k === 1);
      setUnit(stdUnit.id)
   }
   return (
      <ConverterContext.Provider value={
         {
            value: value,
            valuesData: valuesData,
            unit: unit,
            submitted: submitted,
            amount: amount,
            tempMatrix: tempMatrix,
            setValue: changeValue,
            setSubmitted: setSubmitted,
            setAmount: setAmount,
            setUnit: setUnit
         }
      } >
         {props.children}
      </ConverterContext.Provider>
   )
}

export { ConverterContext, ConverterContextProvider }