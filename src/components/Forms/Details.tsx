import React, { useState } from "react";
import { FormBasicStyle } from "./Shared";
import { useDispatch } from "react-redux";
import { detailsUpdate } from "../../redux/reducers/deatilsSlice";
import { initialStateDetails } from "../../utils/helpers";

const Details = () => {
  const [details, setDetails] = useState(initialStateDetails);

  const { firstName, lastName, email, phoneNumber } = details;
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const onSaveDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (firstName && lastName && email && phoneNumber) {
      dispatch(
        detailsUpdate({
          firstName,
          lastName,
          email,
          phoneNumber,
        })
      );
      setDetails(initialStateDetails);
    }
  };
  const canSave =
    Boolean(firstName) &&
    Boolean(lastName) &&
    Boolean(email) &&
    Boolean(phoneNumber);
  return (
    <FormBasicStyle>
      <label htmlFor='firstName'>First name</label>
      <input
        type='text'
        name='firstName'
        id='firstName'
        placeholder='John'
        onChange={handleOnChange}
      />
      <label htmlFor='lastName'>Last name</label>
      <input
        type='text'
        name='lastName'
        id='lastName'
        placeholder='appleseed'
        onChange={handleOnChange}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        name='email'
        id='email'
        placeholder='johnappleseed@gmail.com'
        onChange={handleOnChange}
      />
      <label htmlFor='phoneNumber'>Phone number</label>
      <input
        type='text'
        name='phoneNumber'
        id='phoneNumber'
        placeholder='0123456789'
        onChange={handleOnChange}
      />
      <button type='submit' onClick={onSaveDetailsClick} disabled={!canSave}>
        Go to Shipping
      </button>
    </FormBasicStyle>
  );
};

export default Details;
