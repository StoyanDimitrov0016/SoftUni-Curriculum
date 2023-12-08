import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/Header/NavigationBar";
import Catalog from "./components/Catalog/Catalog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import CreateOffer from "./components/CreateOffer/CreateOffer";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Logout from "./components/Logout/Logout";
import MyOffers from "./components/MyOffers/MyOffers";
import Search from "./components/Search/Search";
import EditOffer from "./components/EditOffer/EditOffer";
import DealershipPage from "./components/ParticularDealershipPage/DealershipPage";
import Watchlist from "./components/PersonalWatchlist/Watchlist";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";

import PROTECTED_ROUTES from "./Routes/protectedRoutes";
import PUBLIC_ROUTES from "./Routes/publicRoutes";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main>
        <Routes>
          <Route path={PUBLIC_ROUTES.HOME.path} element={<Catalog />} />
          <Route path={PUBLIC_ROUTES.LOGIN.path} element={<Login />} />
          <Route path={PUBLIC_ROUTES.REGISTER.path} element={<Register />} />
          <Route path={PUBLIC_ROUTES.ABOUT.path} element={<About />} />
          <Route element={<RequireAuth />}>
            <Route path={PROTECTED_ROUTES.DETAILS.staticPath} element={<Details />} />
            <Route path={PROTECTED_ROUTES.CREATE_OFFER.staticPath} element={<CreateOffer />} />
            <Route path={PROTECTED_ROUTES.MY_OFFERS.staticPath} element={<MyOffers />} />
            <Route path={PROTECTED_ROUTES.MY_WATCHLIST.staticPath} element={<Watchlist />} />
            <Route path={PROTECTED_ROUTES.LOGOUT.staticPath} element={<Logout />} />
            <Route path={PROTECTED_ROUTES.EDIT_OFFER.staticPath} element={<EditOffer />} />
            <Route
              path={PROTECTED_ROUTES.DEALERSHIP_PAGE.staticPath}
              element={<DealershipPage />}
            />
            <Route path={PROTECTED_ROUTES.SEARCH.staticPath} element={<Search />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
