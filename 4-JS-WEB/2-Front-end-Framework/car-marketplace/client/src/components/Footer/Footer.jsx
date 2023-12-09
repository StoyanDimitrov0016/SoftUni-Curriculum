import React from "react";
import { Link } from "react-router-dom";
import PUBLIC_ROUTES from "../../Routes/publicRoutes";

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Vehicle Catalog</p>
      <ul>
        <li>
          <Link to={PUBLIC_ROUTES.ABOUT.path}>{PUBLIC_ROUTES.ABOUT.label}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
