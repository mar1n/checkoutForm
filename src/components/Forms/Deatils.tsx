import React, { useState } from "react";
import {FormBasicStyle } from "./Shared";

const Deatils = () => {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value})
  }
  return (
    <FormBasicStyle>
      <label htmlFor='firstName'>First name</label>
      <input type='text' name='firstName' id="firstName" placeholder='John' onChange={handleOnChange} />
      <label htmlFor='lastName'>Last name</label>
      <input type='text' name='lastName' id="lastName" placeholder='appleseed' onChange={handleOnChange} />
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' id="email" placeholder='johnappleseed@gmail.com' onChange={handleOnChange} />
      <label htmlFor='phoneNumber'>Phone number</label>
      <input type='text' name='phoneNumber' id="phoneNumber" placeholder='0123456789' onChange={handleOnChange} />
      <button type='submit'>Go to Shipping</button>
    </FormBasicStyle>
  );
};

export default Deatils;
