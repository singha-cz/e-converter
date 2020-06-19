import React, { useContext } from 'react';
import { ConverterContext } from '../../context/converter.context';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import ConversionRow from '../ConversionRow/ConversionRow';


const Conversions = () => {
   const {
      value,
      valuesData,
      unit,
      submitted,
      amount
   } = useContext(ConverterContext);

   const activeQuant = valuesData.find(item => item.id === value);
   const results = activeQuant?.units || [];
   const activeUnit = results.find(item => item.id === unit);

   const element = submitted && amount && value ?
      <Grow in={submitted}>
         <div style={{ textAlign: "left", marginBottom: "3rem" }}>
            <Typography variant="h6">Conversions</Typography>
            <Table>
               <TableBody>
                  {results.map(item => <ConversionRow key={item.id} item={item} k={activeUnit?.k} />)}
               </TableBody>
            </Table>
         </div>
      </Grow>
      :
      <>
         <Divider />
         <p><em>Select amount/unit, enter amount and click Convert.</em></p>
      </>
   return element
}

export default Conversions;