import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const NavigationBar = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <nav className="navbar">
      {/* <h1>Welcome to the Car Place</h1> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/create-offer">Create an offer</Link>
            </li>
            <li>
              <Link to="/search">
                <img src="/icons/search.svg" alt="search" />
              </Link>
            </li>
            <li>
              <Link to="/my-offers">My offers</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}

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
