import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Header/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

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
          <Route path="/create-offer"></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
