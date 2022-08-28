import React from "react";
import Details from "./Forms/Details";
import Shipping from "./Forms/Shipping";
import Payment from "./Forms/Payment";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Main = () => {
  const stepper = useSelector((state: RootState) => state.stepper);
  const { details, shipping, payment } = stepper;
  return (
    <>
      <div className='main-wrapper'>
        <div className='form-wrapper'>{details && <Details />}</div>
        <div className='form-wrapper'>{shipping && <Shipping />}</div>
        <div className='form-wrapper'>{payment && <Payment />}</div>
      </div>
    </>
  );
};

export default Main;
