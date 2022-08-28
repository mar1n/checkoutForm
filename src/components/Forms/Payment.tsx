import React from "react";
import { ButtonNeighbours, FormBasicStyle } from "../Shared";
import { useDispatch, useSelector } from "react-redux";
import { paymentUpdate } from "../../redux/reducers/paymentSlice";
import { stepperUpdate } from "../../redux/reducers/stepperSlice";
import { RootState } from "../../redux/store";

const Payment = () => {
  const dispatch = useDispatch();
  const payment = useSelector((state: RootState) => state.payment);
  const confirmData = useSelector((state: RootState) => {
    return {
      ...state.details,
      ...state.shipping,
      ...state.payment,
    };
  });
  const { nameOnCard, cardNumber, cw, expirationDate } = payment;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(paymentUpdate({ ...payment, [e.target.name]: e.target.value }));
  };
  const onSavePaymentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (nameOnCard && cardNumber && cw && expirationDate) {
      dispatch(
        paymentUpdate({
          nameOnCard,
          cardNumber,
          cw,
          expirationDate,
        })
      );
      console.log('Confirmation of all details:', confirmData);
    }
  };
  const goBackToShipping = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      stepperUpdate({
        shipping: true,
        payment: false,
      })
    );
  };
  const canSave =
    Boolean(nameOnCard) &&
    Boolean(cardNumber) &&
    Boolean(cw) &&
    Boolean(expirationDate);
  return (
    <>
      <h3>Payment Form</h3>
      <FormBasicStyle>
        <div>
          <label htmlFor='nameOnCard'>Name on card</label>
          <input
            type='text'
            name='nameOnCard'
            id='nameOnCard'
            placeholder='MR J APPLESEED'
            value={nameOnCard}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor='cardNumber'>Card number</label>
          <input
            type='text'
            name='cardNumber'
            id='cardNumber'
            placeholder='8888 8888 8888 8888'
            value={cardNumber}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor='cw'>CVV</label>
          <input
            type='text'
            name='cw'
            id='cw'
            placeholder='000'
            value={cw}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor='exporationDate'>Expiration date</label>
          <input
            type='text'
            name='expirationDate'
            id='expirationDate'
            placeholder='04/22'
            value={expirationDate}
            onChange={handleOnChange}
          />
        </div>
        <ButtonNeighbours>
          <button onClick={goBackToShipping}>Go back</button>
          <button
            type='submit'
            onClick={onSavePaymentClick}
            disabled={!canSave}
          >
            Submit
          </button>
        </ButtonNeighbours>
      </FormBasicStyle>
    </>
  );
};

export default Payment;
