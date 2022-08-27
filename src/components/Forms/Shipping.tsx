import React from "react";

const Shipping = () => {
  return (
    <form>
      <label htmlFor='example-input'>Address</label>
      <input type='text' name='example-input' placeholder='1 brick lane' />
      <label htmlFor='example-input'>City</label>
      <input type='text' name='example-input' placeholder='London' />
      <label htmlFor='example-input'>Zip code</label>
      <input type='text' name='example-input' placeholder='CE1 4SA' />
      <label htmlFor='example-input'>State/Province</label>
      <input type='text' name='example-input' placeholder='England' />
      <label htmlFor='example-input'>Country</label>
      <input type='text' name='example-input' placeholder='United Kingdom' />
      <button>Go back</button>
      <button>Go to Payment</button>
    </form>
  );
};

export default Shipping;
