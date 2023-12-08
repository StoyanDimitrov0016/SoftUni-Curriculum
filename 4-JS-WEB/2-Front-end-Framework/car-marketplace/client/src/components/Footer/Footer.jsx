import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Vehicle Catalog</p>
      <ul>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
