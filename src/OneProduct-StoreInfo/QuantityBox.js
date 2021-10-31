import React, {useState} from 'react';
import './QuantityBox.css';


  var value = 1;

  function QuantityBox() {

      const [qty, setQuantiy] = useState('1');

       const onDecrement = () => {
         console.log(value);
        if (qty <= 0) return;
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
            <div className='quantity-box'>
              <span className='dec' onClick={onDecrement}>–</span>
              <span className='quanty'>{qty}</span>
              <span className='inc' onClick={onIncrement}>+</span>
            </div>
          );
      }

  export default QuantityBox;