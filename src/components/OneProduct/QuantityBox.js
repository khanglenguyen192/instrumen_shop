import React, {useState} from 'react';
import {Box, Button} from './QuantityBoxElement';

  var value = 1;

  function QuantityBox() {

      const [qty, setQuantiy] = useState('1');

       const onDecrement = () => {
         console.log(value);
        if (qty <= 1) return;
        value = value - 1;
        setQuantiy(value);
        console.log("Hi decrease", value);
      }

      const onIncrement = () => {
        console.log(value);
        value = value + 1;
        setQuantiy(value);
        console.log("Hi Increase", value);
      }

        return (
            <Box>
              <Button className='dec' onClick={onDecrement}>–</Button>
              <Button className='quanty'>{qty}</Button>
              <Button className='inc' onClick={onIncrement}>+</Button>
            </Box>
          );
      }

  export default QuantityBox;