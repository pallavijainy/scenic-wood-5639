import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../Pages/Admin";
import Kids from "../Category/Kids";
import Mens from "../Category/Mens";
import Women from "../Category/Womens";
import HomePage from './../HomePage/HomePage';
import Login from '../LoginSignupPage/Login';
import Signup from '../LoginSignupPage/Signup'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/womens" element={<Women />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/kids" element={<Kids />} />

    </Routes>
  );
};

export default AllRoutes;
