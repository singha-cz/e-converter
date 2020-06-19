import React, { useContext } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { ConverterContext } from '../../context/converter.context';

const ConversionRow = ({ item, k }) => {
   const {
      value,
      unit,
      amount,
      tempMatrix
   } = useContext(ConverterContext);

   const relK = k || 1;
   let matrixRes;

   if (value === "temperature") {
      const matrixValue = tempMatrix.find(it => it.id === unit);
      const matrixCalc = matrixValue.calcs[item.id];
      const x = Number(amount);  // pouziva se v eval()
      matrixRes = eval(matrixCalc) || 0;
   }
   const res = value === "temperature" ? matrixRes : amount * (relK / item.k);
   return <>
      <TableRow key={item.id}>
         <TableCell>{item.id} </TableCell>
         <TableCell align="right"><strong>{res.toLocaleString(undefined, {
            maximumFractionDigits: 2
         })} {item.symbol}</strong> </TableCell>
      </TableRow>
   </>
}

export default ConversionRow;