import React, { useState } from "react";
import { ButtonNeighbours, FormBasicStyle } from "./Shared";


const Payment = () => {
  const [payment, setPayment] = useState({
    nameOnCard: '',
    cardNumber: '',
    cw: '',
    exporationDate: ''
  })
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({...payment, [e.target.name]: e.target.value })
  }
  return (
    <FormBasicStyle>
      <div>
        <label htmlFor='nameOnCard'>Name on card</label>
        <input type='text' name='nameOnCard' id="nameOnCard" placeholder='MR J APPLESEED' onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor='cardNumber'>Card number</label>
        <input
          type='text'
          name='cardNumber'
          id="cardNumber"
          placeholder='8888 8888 8888 8888'
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor='cw'>CVV</label>
        <input type='text' name='cw' id="cw" placeholder='000' onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor='exporationDate'>Expiration date</label>
        <input type='text' name='exporationDate' id="exporationDate" placeholder='04/22' onChange={handleOnChange} />
      </div>
      <ButtonNeighbours>
        <button>Go back</button>
        <button type='submit'>Submit</button>
      </ButtonNeighbours>
    </FormBasicStyle>
  );
};

export default Payment;
