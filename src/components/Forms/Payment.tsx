import React from "react";
import { ButtonNeighbours, FormBasicStyle } from "./Shared";


const Payment = () => {
  return (
    <FormBasicStyle>
      <div>
        <label htmlFor='example-input'>Name on card</label>
        <input type='text' name='example-input' placeholder='MR J APPLESEED' />
      </div>
      <div>
        <label htmlFor='example-input'>Card number</label>
        <input
          type='text'
          name='example-input'
          placeholder='8888 8888 8888 8888'
        />
      </div>
      <div>
        <label htmlFor='example-input'>CVV</label>
        <input type='text' name='example-input' placeholder='000' />
      </div>
      <div>
        <label htmlFor='example-input'>Expiration date</label>
        <input type='text' name='example-input' placeholder='04/22' />
      </div>
      <ButtonNeighbours>
        <button>Go back</button>
        <button type='submit'>Submit</button>
      </ButtonNeighbours>
    </FormBasicStyle>
  );
};

export default Payment;
