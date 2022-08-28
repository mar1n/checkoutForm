import React, { useState } from "react";
import { ButtonNeighbours, FormBasicStyle } from "./Shared";
import { useDispatch } from "react-redux";
import { paymentUpdate } from "../../redux/reducers/paymentSlice";
import { initialStatePayment } from "../../utils/helpers";

const Payment = () => {
  const [payment, setPayment] = useState(initialStatePayment);

  const { nameOnCard, cardNumber, cw, exporationDate } = payment;
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({...payment, [e.target.name]: e.target.value })
  }
  const onSavePaymentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (nameOnCard && cardNumber && cw && exporationDate) {
      dispatch(
        paymentUpdate({
          nameOnCard,
          cardNumber,
          cw,
          exporationDate,
        })
      );
      setPayment(initialStatePayment);
    }
  };
  const canSave =
    Boolean(nameOnCard) &&
    Boolean(cardNumber) &&
    Boolean(cw) &&
    Boolean(exporationDate);
  return (
    <FormBasicStyle>
      <div>
        <label htmlFor='nameOnCard'>Name on card</label>
        <input type='text' name='nameOnCard' id="nameOnCard" placeholder='MR J APPLESEED' onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor='cardNumber'>Card number</label>
        <input
          type='text'
          name='cardNumber'
          id="cardNumber"
          placeholder='8888 8888 8888 8888'
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor='cw'>CVV</label>
        <input type='text' name='cw' id="cw" placeholder='000' onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor='exporationDate'>Expiration date</label>
        <input type='text' name='exporationDate' id="exporationDate" placeholder='04/22' onChange={handleOnChange} />
      </div>
      <ButtonNeighbours>
        <button>Go back</button>
        <button type='submit' onClick={onSavePaymentClick} disabled={!canSave} >Submit</button>
      </ButtonNeighbours>
    </FormBasicStyle>
  );
};

export default Payment;
