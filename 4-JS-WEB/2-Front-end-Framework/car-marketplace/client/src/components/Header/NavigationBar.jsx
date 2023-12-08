import { Link } from "react-router-dom";
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
          <Link to={PUBLIC_ROUTES.HOME.path}>{PUBLIC_ROUTES.HOME.label}</Link>
        </li>
        {userEmail ? (
          <>
            <li>
              <Link to={PROTECTED_ROUTES.CREATE_OFFER.staticPath}>
                {PROTECTED_ROUTES.CREATE_OFFER.label}
              </Link>
            </li>
            <li>
              <Link to={PROTECTED_ROUTES.SEARCH.staticPath}>
                <img src="/icons/search.svg" alt="search" />
              </Link>
            </li>
            <Link to={PROTECTED_ROUTES.MY_OFFERS.staticPath}>
              {PROTECTED_ROUTES.MY_OFFERS.label}
            </Link>
            <li>
              <Link to={PROTECTED_ROUTES.MY_WATCHLIST.staticPath}>
                {PROTECTED_ROUTES.MY_WATCHLIST.label}
              </Link>
            </li>
            <li>
              <Link to={PROTECTED_ROUTES.LOGOUT.staticPath}>{PROTECTED_ROUTES.LOGOUT.label}</Link>
            </li>
            <li>
              <p>{userEmail}</p>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={PUBLIC_ROUTES.LOGIN.path}>{PUBLIC_ROUTES.LOGIN.label}</Link>
            </li>
            <li>
              <Link to={PUBLIC_ROUTES.REGISTER.path}>{PUBLIC_ROUTES.REGISTER.label}</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
