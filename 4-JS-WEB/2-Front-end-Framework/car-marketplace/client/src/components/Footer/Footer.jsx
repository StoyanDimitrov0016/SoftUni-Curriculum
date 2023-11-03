import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>© 2023 Vehicle Catalog</p>
      <li>
        <Link to="/about">About us</Link>
      </li>
    </footer>
  );
};

export default Footer;
