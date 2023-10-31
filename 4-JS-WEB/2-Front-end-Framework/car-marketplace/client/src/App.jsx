import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Header/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import CreateOffer from "./components/CreateOffer/CreateOffer";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Catalog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/offer/:offerId" element={<Details />}></Route>
          <Route path="/create-offer" element={<CreateOffer />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
