import React from "react";

const Register = () => {
  return (
    <>
      <form action="/register" method="post">
        <label htmlFor="userType">Select User Type:</label>
        <select name="userType" id="userType">
          <option value="regular">Regular User</option>
          <option value="company">Company</option>
        </select>
        <div className="common-fields">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required="" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required="" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required="" />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required=""
          />
        </div>
        <div className="company-fields">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" name="companyName" id="companyName" />
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login.html">Login</a>
      </p>
    </>
  );
};

export default Register;
