import React from "react";
import {FormBasicStyle } from "./Shared";

const Deatils = () => {
  return (
    <FormBasicStyle>
      <label htmlFor='example-input'>First name</label>
      <input type='text' name='firstName' placeholder='John' />
      <label htmlFor='example-input'>Last name</label>
      <input type='text' name='lastName' placeholder='appleseed' />
      <label htmlFor='example-input'>Email</label>
      <input type='text' name='email' placeholder='johnappleseed@gmail.com' />
      <label htmlFor='example-input'>Phone number</label>
      <input type='text' name='phoneNumber' placeholder='0123456789' />
      <button type='submit'>Go to Shipping</button>
    </FormBasicStyle>
  );
};

export default Deatils;
