import React from "react";
import { HeaderStyle } from "./Shared";
import { useSelector } from "react-redux";
import { DetailsStyle, ShippingStyle, PaymentStyle } from "./Shared";
import { RootState } from "../redux/store";

const Header = () => {
  const stepper = useSelector((state: RootState) => state.stepper);
  const { details, shipping, payment } = stepper;
  return (
    <>
      <h1>Checkout Form</h1>
      <HeaderStyle>
        <DetailsStyle details={details}>Details</DetailsStyle>
        <ShippingStyle shipping={shipping}>Shipping</ShippingStyle>
        <PaymentStyle payment={payment}>Payment</PaymentStyle>
      </HeaderStyle>
    </>
  );
};

export default Header;
