import React, { useState } from "react";
import { ButtonNeighbours, FormBasicStyle } from "./Shared";

const Shipping = () => {
  const [shipping, setShipping] = useState({
    address: '',
    city: '',
    zipCode: '',
    stateProvince: '',
    country: ''
  })
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({...shipping, [e.target.name]: e.target.value })
  }

  return (
    <FormBasicStyle>
      <label htmlFor='address'>Address</label>
      <input type='text' name='address' id="address" placeholder='1 brick lane' onChange={handleOnChange} />
      <label htmlFor='city'>City</label>
      <input type='text' name='city' id="city" placeholder='London' onChange={handleOnChange} />
      <label htmlFor='zipCode'>Zip code</label>
      <input type='text' name='zipCode' id="zipCode" placeholder='CE1 4SA' onChange={handleOnChange} />
      <label htmlFor='stateProvince'>State/Province</label>
      <input type='text' name='stateProvince' id="stateProvince" placeholder='England' onChange={handleOnChange} />
      <label htmlFor='country'>Country</label>
      <input type='text' name='country' id="country" placeholder='United Kingdom' onChange={handleOnChange} />
      <ButtonNeighbours>
      <button>Go back</button>
      <button>Go to Payment</button>
      </ButtonNeighbours>
    </FormBasicStyle>
  );
};

export default Shipping;
