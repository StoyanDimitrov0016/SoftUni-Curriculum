import { NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

import PUBLIC_ROUTES from "../../Routes/publicRoutes";
import PROTECTED_ROUTES from "../../Routes/protectedRoutes";


const NavigationBar = () => {
  const { userCredentials } = useAuthContext();
  const userEmail = userCredentials?.userEmail;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="active" to={PUBLIC_ROUTES.HOME.path}>{PUBLIC_ROUTES.HOME.label}</NavLink>
        </li>
        {userEmail ? (
          <>
            <li>
              <NavLink activeClassName="active" to={PROTECTED_ROUTES.CREATE_OFFER.staticPath}>
                {PROTECTED_ROUTES.CREATE_OFFER.label}
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={PROTECTED_ROUTES.SEARCH.staticPath}>
                <img src="/icons/search.svg" alt="search" />
              </NavLink>
            </li>
            <NavLink activeClassName="active" to={PROTECTED_ROUTES.MY_OFFERS.staticPath}>
              {PROTECTED_ROUTES.MY_OFFERS.label}
            </NavLink>
            <li>
              <NavLink activeClassName="active" to={PROTECTED_ROUTES.MY_WATCHLIST.staticPath}>
                {PROTECTED_ROUTES.MY_WATCHLIST.label}
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={PROTECTED_ROUTES.LOGOUT.staticPath}>{PROTECTED_ROUTES.LOGOUT.label}</NavLink>
            </li>
            <li>
              <p>{userEmail}</p>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink activeClassName="active" to={PUBLIC_ROUTES.LOGIN.path}>{PUBLIC_ROUTES.LOGIN.label}</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={PUBLIC_ROUTES.REGISTER.path}>{PUBLIC_ROUTES.REGISTER.label}</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
