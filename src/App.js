import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ProductDetails, Shop } from "./pages";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
