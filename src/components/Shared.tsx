import styled from "styled-components";

export const FormBasicStyle = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  input[type="text"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    box-sizing: border-box;
  }
  label {
    padding: 0 0 0 5px;
    text-align: left;
    display: inline-block;
  }
  button {
    appearance: none;
    -webkit-appearance: none;

    padding: 10px;
    margin: 10px 0px 0px 0px;
    border: none;
    background-color: #3f51b5;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    width: 100%;
  }
`;
export const ButtonNeighbours = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const HeaderStyle = styled.div`
  display: flex;
  height: 30px;
  gap: 5px;
  div {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #3f51b5;
    color: white;
    width: 100%;
    height: 100%;
  }
`;

export const DetailsStyle = styled.div<{ details: boolean }>`
  opacity: ${({ details }) => (details ? 1 : 0.5)};
`;

export const ShippingStyle = styled.div<{ shipping: boolean }>`
  opacity: ${({ shipping }) => (shipping ? 1 : 0.5)};
`;

export const PaymentStyle = styled.div<{ payment: boolean }>`
  opacity: ${({ payment }) => (payment ? 1 : 0.5)};
`;

export const GoToButton = styled.button.attrs({ type: "submit" })<{
  ready: boolean;
}>`
  opacity: ${({ ready }) => (ready ? 1 : 0.5)};
`;
