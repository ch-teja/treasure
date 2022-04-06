import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductListingProvider } from "./context/product-listing-context";
import { CartProvider } from "./context/cart-context";
import { WishListProvider } from "./context/wish-list-context";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishListProvider>
        <CartProvider>
          <ProductListingProvider>
            <App />
          </ProductListingProvider>
        </CartProvider>
      </WishListProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


