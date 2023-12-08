import React from "react";
import { Link } from "react-router-dom";
import PUBLIC_ROUTES from "../../Routes/publicRoutes";

const NotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <h1 className="not-found-title">404 - Not Found</h1>
        <p className="not-found-message">The page you are looking for cannot be found.</p>
      </div>
      <Link to={PUBLIC_ROUTES.HOME.path}>Go to home</Link>
    </>
  );
};

export default NotFound;
