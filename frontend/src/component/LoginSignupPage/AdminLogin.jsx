import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import ForgetPass from "./ForgetPass";
import Navbar from "../Navbar/Navbar";

const AdminLogin = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginFunc = () => {
    const payload = {
      email,
      password,
    };
    if (email == "" || password == "") {
      toast({
        status: "error",
        duration: 3000,
        title: "Fill all Details",
        isClosable: true,
      });
      return;
    }
    if (email == "sarfraj.shoeland@gmail.com" && password == "sam") {
      toast({
        status: "success",
        duration: 3000,
        title: "Signed as Admin Successfully",
        isClosable: true,
      });

      navigate("/admin");
    } else {
      toast({
        status: "error",
        duration: 3000,
        title: "Invalid Credentials",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box>
        <Flex align={"center"} justify={"center"} bg={"gray.50"} m="auto">
          <Stack
            spacing={8}
            mx={"auto"}
            width={{ base: "100%", md: "35%" }}
            py={12}
            px={6}
          >
            <Stack align={"center"}>
              <Heading color={"red.500"} fontSize={"4xl"}>
                Admin Login
              </Heading>
            </Stack>
            <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={8}>
              <Stack spacing={2}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    focusBorderColor="#002E6E"
                    borderColor={"#002E6E"}
                    placeholder="sarfraj.shoeland@gmail.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    focusBorderColor="#002E6E"
                    borderColor={"#002E6E"}
                    placeholder="Enter pass (sam)"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <Stack spacing={5}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Stack>

                  <Button
                    type="submit"
                    bg={"blue.500"}
                    color={"white"}
                    _hover={{
                      bg: "blue.600",
                    }}
                    onClick={LoginFunc}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default AdminLogin;
