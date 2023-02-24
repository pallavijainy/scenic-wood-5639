import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../Pages/Admin";
import Kids from "../Category/Kids";
import Mens from "../Category/Mens";
import Womens from "../Category/Womens";

import HomePage from "./../HomePage/HomePage";
import ProductDetails from "../Category/Productdetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/womens" element={<Womens />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AllRoutes;