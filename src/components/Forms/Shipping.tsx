import React, { useState } from "react";
import { ButtonNeighbours, FormBasicStyle } from "./Shared";
import { useDispatch } from "react-redux";
import { shippingUpdate } from "../../redux/reducers/shippingSlice";
import { initialStateShipping } from "../../utils/helpers";

const Shipping = () => {
  const [shipping, setShipping] = useState(initialStateShipping);

  const { address, city, zipCode, stateProvince, country } = shipping;
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const onSaveShippingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (address && city && zipCode && stateProvince && country) {
      dispatch(
        shippingUpdate({
          address,
          city,
          zipCode,
          stateProvince,
          country,
        })
      );
      setShipping(initialStateShipping);
    }
  };
  const canSave =
    Boolean(address) &&
    Boolean(city) &&
    Boolean(zipCode) &&
    Boolean(stateProvince) &&
    Boolean(country);
  return (
    <FormBasicStyle>
      <label htmlFor='address'>Address</label>
      <input
        type='text'
        name='address'
        id='address'
        placeholder='1 brick lane'
        onChange={handleOnChange}
      />
      <label htmlFor='city'>City</label>
      <input
        type='text'
        name='city'
        id='city'
        placeholder='London'
        onChange={handleOnChange}
      />
      <label htmlFor='zipCode'>Zip code</label>
      <input
        type='text'
        name='zipCode'
        id='zipCode'
        placeholder='CE1 4SA'
        onChange={handleOnChange}
      />
      <label htmlFor='stateProvince'>State/Province</label>
      <input
        type='text'
        name='stateProvince'
        id='stateProvince'
        placeholder='England'
        onChange={handleOnChange}
      />
      <label htmlFor='country'>Country</label>
      <input
        type='text'
        name='country'
        id='country'
        placeholder='United Kingdom'
        onChange={handleOnChange}
      />
      <ButtonNeighbours>
        <button>Go back</button>
        <button type='submit' onClick={onSaveShippingClick} disabled={!canSave}>
          Go to Payment
        </button>
      </ButtonNeighbours>
    </FormBasicStyle>
  );
};

export default Shipping;
