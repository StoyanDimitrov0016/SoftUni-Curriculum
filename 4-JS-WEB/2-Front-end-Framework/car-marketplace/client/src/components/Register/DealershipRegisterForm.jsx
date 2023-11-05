import React, { useState } from "react";

const DealershipRegisterForm = () => {
  const [formValues, setFormValues] = useState({
    dealershipName: "",
    location: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userType: "dealership",
  });

  const onChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form className="dealership-register-form" onSubmit={onSubmit}>
      <label htmlFor="dealershipName">Dealership Name:</label>
      <input
        type="text"
        id="dealershipName"
        name="dealershipName"
        required
        className="dealership-input"
        value={formValues.dealershipName}
        onChange={onChangeHandler}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        required
        className="dealership-input"
        value={formValues.location}
        onChange={onChangeHandler}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="dealership-input"
        value={formValues.email}
        onChange={onChangeHandler}
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        required
        className="dealership-input"
        value={formValues.phoneNumber}
        onChange={onChangeHandler}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="dealership-input"
        value={formValues.password}
        onChange={onChangeHandler}
      />

      <label htmlFor="password">Confirm password:</label>
      <input
        type="password"
        id="password"
        name="confirmPassword"
        required
        className="dealership-input"
        value={formValues.confirmPassword}
        onChange={onChangeHandler}
      />

      <button type="submit" className="dealership-button">
        Register
      </button>
    </form>
  );
};

export default DealershipRegisterForm;
