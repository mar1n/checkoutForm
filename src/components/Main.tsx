import React from 'react';

const Main = () => {
  return (<>
    <div className="main-wrapper">
      <div className="form-wrapper">
      <h3>Details Form</h3>
      <form>
        <label htmlFor="example-input">First name</label>
        <input type="text" name="firstName" placeholder="John" />
        <label htmlFor="example-input">Last name</label>
        <input type="text" name="lastName" placeholder="appleseed" />
        <label htmlFor="example-input">Email</label>
        <input type="text" name="email" placeholder="johnappleseed@gmail.com" />
        <label htmlFor="example-input">Phone number</label>
        <input type="text" name="phoneNumber" placeholder="0123456789" />
        <button type="submit">Go to Shipping</button>
      </form>
      </div>

      <div className="form-wrapper">
      <h3>Shipping Form</h3>
      <form>
        <label htmlFor="example-input">Address</label>
        <input type="text" name="example-input" placeholder="1 brick lane" />
        <label htmlFor="example-input">City</label>
        <input type="text" name="example-input" placeholder="London" />
        <label htmlFor="example-input">Zip code</label>
        <input type="text" name="example-input" placeholder="CE1 4SA" />
        <label htmlFor="example-input">State/Province</label>
        <input type="text" name="example-input" placeholder="England" />
        <label htmlFor="example-input">Country</label>
        <input type="text" name="example-input" placeholder="United Kingdom" />
        <button>Go back</button>
        <button>Go to Payment</button>
      </form>
      </div>
      <div className="form-wrapper">
      <h3>Payment Form</h3>
      <form>
        <label htmlFor="example-input">Name on card</label>
        <input type="text" name="example-input" placeholder="MR J APPLESEED" />
        <label htmlFor="example-input">Card number</label>
        <input type="text" name="example-input" placeholder="8888 8888 8888 8888" />
        <label htmlFor="example-input">CVV</label>
        <input type="text" name="example-input" placeholder="000" />
        <label htmlFor="example-input">Expiration date</label>
        <input type="text" name="example-input" placeholder="04/22" />
        <button>Go back</button>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  </>)
}

export default Main;