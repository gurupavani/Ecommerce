import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home/Home";
import Product from "./views/product/Product";
import Cart from "./views/cart/Cart";
import Profile from "./views/profile/Profile";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Navigation>
      </BrowserRouter>
    </div>
  );
}

export default App;
