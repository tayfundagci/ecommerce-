import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        {user ? (
          <Route path="/login" element={<Navigate to="/" replace />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        {user ? (
          <Route path="/register" element={<Navigate to="/" replace />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
