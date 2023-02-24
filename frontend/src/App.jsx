import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./component/AllRoutes/AllRoutes";
import Navbar from './component/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Navbar/>
      <AllRoutes />
    </Box>
  );
}

export default App;
