import React, { useEffect, useState } from "react";

import { AccountCircleIcon } from "@mui/icons-material/AccountCircle";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Avatar,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import axios from "axios";
const ProfileIcon = () => {
  const [userDetails, setUserDetails] = useState({});
  const token = JSON.parse(sessionStorage.getItem("token"));

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(`https://good-rose-kingfisher-tam.cyclic.app/user/profile`, {
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        setUserDetails(res.data[0]);
      });
  }, []);
  return (
    <Menu>
      <MenuButton>
        <Avatar name={userDetails.name} src="" size={"md"}></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem>Cart</MenuItem>
        <MenuDivider />
        <MenuItem fontWeight={"bold"}>{userDetails.email}</MenuItem>
        <MenuItem onClick={handleLogout} color={"red.400"}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileIcon;
