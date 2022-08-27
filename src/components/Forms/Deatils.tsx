import React from "react";
import styled from "styled-components";

const DetailsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 150px;
  input {
    background: tomato;
  }
`;
const Deatils = () => {
  return (
    <DetailsForm>
      <label htmlFor='example-input'>First name</label>
      <input type='text' name='firstName' placeholder='John' />
      <label htmlFor='example-input'>Last name</label>
      <input type='text' name='lastName' placeholder='appleseed' />
      <label htmlFor='example-input'>Email</label>
      <input type='text' name='email' placeholder='johnappleseed@gmail.com' />
      <label htmlFor='example-input'>Phone number</label>
      <input type='text' name='phoneNumber' placeholder='0123456789' />
      <button type='submit'>Go to Shipping</button>
    </DetailsForm>
  );
};

export default Deatils;
