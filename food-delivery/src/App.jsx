// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopPage from "./components/ShopPage.jsx";
import CartPage from "./components/CartPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/cart">Shopping Cart</a>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
