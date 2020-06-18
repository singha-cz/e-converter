import React, { useContext } from 'react';
import { QuantContext} from '../../context/quants.context';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const Conversions = () => {
   const {
      quant, 
      quants,
      unit,
      submitted,
      value
   } = useContext(QuantContext);
   
   const Result = ({item, k}) => {
      const relK = k || 1;
      const offset = item.offset && item.id !== unit? item.offset: 0;
      const res = offset + value*(relK/item.k);
      return <>
         <TableRow key={item.id}>
            <TableCell>{item.id} </TableCell>
            <TableCell align="right"><strong>{res.toLocaleString(undefined, {
               maximumFractionDigits: 2
            })} {item.symbol}</strong> </TableCell>
         </TableRow>     
      </>
   }
   
   const activeQuant = quants.find(item => item.id === quant);    
   const results = activeQuant? activeQuant.units: [];
   const activeUnit = results.find(item => item.id === unit);
   const element = submitted && value && quant? <>
      <h3>Conversions</h3>
      <Table>
         <TableBody>
         {results.map(item => <Result key={item.id} item={item} k={activeUnit?.k} />)}
         </TableBody>
      </Table>
   </>
   : <p><em>Select value/unit, enter amount first and click Convert.</em></p> 
   return element
}

export default Conversions;