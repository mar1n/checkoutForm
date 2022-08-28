import React from "react";
import { FormBasicStyle, GoToButton } from "../Shared";
import { useDispatch, useSelector } from "react-redux";
import { detailsUpdate } from "../../redux/reducers/detailsSlice";
import { stepperUpdate } from "../../redux/reducers/stepperSlice";
import { RootState } from "../../redux/store";

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((state: RootState) => state.details);
  const { firstName, lastName, email, phoneNumber } = details;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(detailsUpdate({ ...details, [e.target.name]: e.target.value }));
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
      dispatch(
        stepperUpdate({
          details: false,
          shipping: true,
        })
      );
    }
  };
  const canSave =
    Boolean(firstName) &&
    Boolean(lastName) &&
    Boolean(email) &&
    Boolean(phoneNumber);
  return (
    <>
      <h3>Details Form</h3>
      <FormBasicStyle>
        <label htmlFor='firstName'>First name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='John'
          value={firstName}
          onChange={handleOnChange}
        />
        <label htmlFor='lastName'>Last name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='appleseed'
          value={lastName}
          onChange={handleOnChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='johnappleseed@gmail.com'
          value={email}
          onChange={handleOnChange}
        />
        <label htmlFor='phoneNumber'>Phone number</label>
        <input
          type='text'
          name='phoneNumber'
          id='phoneNumber'
          placeholder='0123456789'
          value={phoneNumber}
          onChange={handleOnChange}
        />
        <GoToButton onClick={onSaveDetailsClick} disabled={!canSave} ready={canSave}>
          Go to Shipping
        </GoToButton>
      </FormBasicStyle>
    </>
  );
};

export default Details;
