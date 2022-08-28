import React from "react";
import { ButtonNeighbours, FormBasicStyle, GoToButton } from "../Shared";
import { useDispatch, useSelector } from "react-redux";
import { shippingUpdate } from "../../redux/reducers/shippingSlice";
import { stepperUpdate } from "../../redux/reducers/stepperSlice";
import { RootState } from "../../redux/store";

const Shipping = () => {
  const dispatch = useDispatch();
  const shipping = useSelector((state: RootState) => state.shipping);
  const { address, city, zipCode, stateProvince, country } = shipping;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      shippingUpdate({
        ...shipping,
        [e.target.name]: e.target.value,
      })
    );
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
      dispatch(
        stepperUpdate({
          shipping: false,
          payment: true,
        })
      );
    }
  };
  const goBackToDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      stepperUpdate({
        details: true,
        shipping: false,
      })
    );
  };
  const canSave =
    Boolean(address) &&
    Boolean(city) &&
    Boolean(zipCode) &&
    Boolean(stateProvince) &&
    Boolean(country);
  return (
    <>
      <h3>Shipping Form</h3>
      <FormBasicStyle>
        <label htmlFor='address'>Address</label>
        <input
          type='text'
          name='address'
          id='address'
          placeholder='1 brick lane'
          value={address}
          onChange={handleOnChange}
        />
        <label htmlFor='city'>City</label>
        <input
          type='text'
          name='city'
          id='city'
          placeholder='London'
          value={city}
          onChange={handleOnChange}
        />
        <label htmlFor='zipCode'>Zip code</label>
        <input
          type='text'
          name='zipCode'
          id='zipCode'
          placeholder='CE1 4SA'
          value={zipCode}
          onChange={handleOnChange}
        />
        <label htmlFor='stateProvince'>State/Province</label>
        <input
          type='text'
          name='stateProvince'
          id='stateProvince'
          placeholder='England'
          value={stateProvince}
          onChange={handleOnChange}
        />
        <label htmlFor='country'>Country</label>
        <input
          type='text'
          name='country'
          id='country'
          placeholder='United Kingdom'
          value={country}
          onChange={handleOnChange}
        />
        <ButtonNeighbours>
          <button onClick={goBackToDetails}>Go back</button>
          <GoToButton
            onClick={onSaveShippingClick}
            disabled={!canSave}
            ready={canSave}
          >
            Go to Payment
          </GoToButton>
        </ButtonNeighbours>
      </FormBasicStyle>
    </>
  );
};

export default Shipping;
