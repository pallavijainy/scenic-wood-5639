import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../Pages/Admin";
import Kids from "../Category/Kids";
import Mens from "../Category/Mens";
import Women from "../Category/Womens";
import HomePage from './../HomePage/HomePage';
import Payment from "../../Pages/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/womens" element={<Women/>} />
      <Route path="/payment" element={<Payment/>} />
    
    <Route path="/mens" element={<Mens/>} />
    <Route path="/kids" element={<Kids/>} />
    
    </Routes>
  );
};

export default AllRoutes;
