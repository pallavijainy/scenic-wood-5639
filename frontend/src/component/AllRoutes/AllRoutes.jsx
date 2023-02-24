import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";
import Admin from "../../Pages/Admin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default AllRoutes;
