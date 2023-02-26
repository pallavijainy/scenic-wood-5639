import React, { useEffect, useState } from "react";

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const LoginModel = () => {
  return (
    <Menu>
      <MenuButton>
        <Button variant={"outline"} colorScheme="red" size={"md"}>
          Login
        </Button>
      </MenuButton>
      <MenuList>
        <Link to={"/login"}>
          <MenuItem>User Login</MenuItem>
        </Link>
        <Link to={"/adminLogin"}>
          <MenuItem>Admin Login</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default LoginModel;
