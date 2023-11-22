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

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            
            <Route element={<RequireAuth />}>
              <Route path="/offer/:offerId" element={<Details />} />
              <Route path="/create-offer" element={<CreateOffer />} />
              <Route path="/my-offers" element={<MyOffers />} />
              <Route path="/my-watchlist" element={<Watchlist />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/offer/edit/:offerId" element={<EditOffer />} />
              <Route path="/offer/delete/:offerId" element={<MyOffers />} />
              <Route path="/dealerships/:dealershipId" element={<DealershipPage />} />
              <Route path="/search" element={<Search />} />
            </Route>
            //TODO: Add 404 page and unauthorized one
            <Route path="/*" element={<About />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
