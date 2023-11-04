import React, { useState } from "react";
import userService from "../../services/userService";

const UserRegisterForm = ({ onRegisterSubmit }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "regular",
  });

  const onChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      return;
    }
  
    await onRegisterSubmit( formValues);
  };

  return (
    <form className="user-register-form" onSubmit={onSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstName"
        required
        className="user-input"
        value={formValues.firstName}
        onChange={onChangeHandler}
      />

      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        name="lastName"
        required
        className="user-input"
        value={formValues.lastName}
        onChange={onChangeHandler}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="user-input"
        value={formValues.email}
        onChange={onChangeHandler}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="user-input"
        value={formValues.password}
        onChange={onChangeHandler}
      />

      <label htmlFor="password">Confirm password:</label>
      <input
        type="password"
        id="password"
        name="confirmPassword"
        required
        className="user-input"
        value={formValues.confirmPassword}
        onChange={onChangeHandler}
      />

      <button type="submit" className="user-button">
        Register
      </button>
    </form>
  );
};

export default UserRegisterForm;
