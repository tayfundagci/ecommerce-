import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />

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
