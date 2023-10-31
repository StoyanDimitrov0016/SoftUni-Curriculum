import React from "react";

const Login = () => {
  return (
    <>
      <form action="/login" method="post">
        <label htmlFor="userType">Select User Type:</label>
        <select name="userType" id="userType">
          <option value="regular">Regular User</option>
          <option value="company">Company</option>
        </select>
        <div className="common-fields">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required="" />
        </div>
        <div className="company-fields">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" name="companyName" id="companyName" />
        </div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required="" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register.html">Register</a>
      </p>
    </>
  );
};

export default Login;
