import React from "react";

const Payment = () => {
  return (
    <form>
      <label htmlFor='example-input'>Name on card</label>
      <input type='text' name='example-input' placeholder='MR J APPLESEED' />
      <label htmlFor='example-input'>Card number</label>
      <input
        type='text'
        name='example-input'
        placeholder='8888 8888 8888 8888'
      />
      <label htmlFor='example-input'>CVV</label>
      <input type='text' name='example-input' placeholder='000' />
      <label htmlFor='example-input'>Expiration date</label>
      <input type='text' name='example-input' placeholder='04/22' />
      <button>Go back</button>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Payment;
