import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";
import Admin from "../../Pages/Admin";
import Kids from "../Category/Kids";
import Mens from "../Category/Mens";
import ProductDetails from "../Category/Productdetails";
import Womens from "../Category/Womens";


import HomePage from './../HomePage/HomePage';
import Payment from "../../Pages/Payment";





import Login from "../LoginSignupPage/Login";
import Signup from "../LoginSignupPage/Signup";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/admin" element={<Admin />}></Route>

     
      <Route path="/payment" element={<Payment/>} />
    
   
    


      <Route path="/cart" element={<Cart />}></Route>

      <Route path="/womens" element={<Womens />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/product/:id" element={<ProductDetails />} />


    </Routes>
  );
};

export default AllRoutes;