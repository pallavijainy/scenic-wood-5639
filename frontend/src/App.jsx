import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./component/AllRoutes/AllRoutes";
import Footer from "./component/Footer/Footer"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
