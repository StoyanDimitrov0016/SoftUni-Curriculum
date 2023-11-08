import { Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";

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

function App() {
  return (
    <AuthProvider>
      <header>
        <NavigationBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Catalog />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>

          <Route path="/offer/:offerId" element={<Details />}></Route>
          <Route path="/create-offer" element={<CreateOffer />}></Route>
          <Route path="/my-offers" element={<MyOffers />}></Route>

          <Route path="/offer/edit/:offerId" element={<EditOffer />}></Route>
          <Route path="/offer/delete/:offerId" element={<MyOffers />}></Route>

          <Route path="/search" element={<Search />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>

      <Footer />
    </AuthProvider>
  );
}

export default App;
