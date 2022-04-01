import { Routes, Route } from "react-router-dom";
import './App.css';

import {Home,Cart,WishList,ProductListing,Nav,Login,SignUp} from "./pages/index.js"

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
