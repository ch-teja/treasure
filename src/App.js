import { Routes, Route } from "react-router-dom";
import './App.css';

import {Home} from "./pages/home/home.jsx";
import {Cart} from "./pages/cart/cart.jsx";
import {WishList} from "./pages/wish-list/wish-list.jsx";
import {ProductListing} from "./pages/product-listing/product-listing.jsx";
import {Nav} from "./components/nav.jsx";
import {Login} from "./pages/auth/login.jsx";
import {SignUp} from "./pages/auth/sign-up.jsx"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productlist" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
