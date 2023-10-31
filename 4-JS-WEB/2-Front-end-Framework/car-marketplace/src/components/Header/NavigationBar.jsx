import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome to the Vehicle Catalog</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/create-offer">Create an offer</Link>
        </li>
        <li>
          <a href="search.html">
            <img src="/icons/search.svg" alt="search" />
          </a>
        </li>
        <li>
          <a href="settings.html">
            <img src="/icons/gear.svg" alt="settings" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
