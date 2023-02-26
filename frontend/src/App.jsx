import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./component/AllRoutes/AllRoutes";
import Navbar from "./component/Navbar/Navbar";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();
  const adminHide = ["/admin", "/Admin"];
  return (
    <Box>
      {!adminHide.includes(pathname) && <Navbar />}
      <AllRoutes />
    </Box>
  );
}

export default App;
