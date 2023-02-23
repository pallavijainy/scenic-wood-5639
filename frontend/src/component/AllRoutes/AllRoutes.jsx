import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../Pages/Admin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
};

export default AllRoutes;
