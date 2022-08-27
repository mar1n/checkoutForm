import React from "react";
import Details from "./Forms/Deatils";
import Shipping from "./Forms/Shipping";
import Payment from "./Forms/Payment";



const Main = () => {
  return (
    <>
      <div className='main-wrapper'>
        <div className='form-wrapper'>
          <h3>Details Form</h3>
          <Details />
        </div>

        <div className='form-wrapper'>
          <h3>Shipping Form</h3>
          <Shipping />
        </div>
        <div className='form-wrapper'>
          <h3>Payment Form</h3>
          <Payment />
        </div>
      </div>
    </>
  );
};

export default Main;
