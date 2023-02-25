import React from "react";

import { AccountCircleIcon } from "@mui/icons-material/AccountCircle";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const ProfileIcon = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar name="P" src="" size={"md"} ></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem>Cart</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileIcon;
