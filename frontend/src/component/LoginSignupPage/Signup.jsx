import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const payload = {
      email,
      password,
      name,
      number,
      confirmPass,
    };
    try {
      fetch(`https://good-rose-kingfisher-tam.cyclic.app/user/register`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.msg == "password must be same") {
            toast({
              status: "error",
              duration: 3000,
              title: "Password Must be Same",
              isClosable: true,
            });
          }
          if (res.msg == "user already exist") {
            toast({
              status: "error",
              duration: 3000,
              title: "User Already Exist!",
              isClosable: true,
            });
          }
          if (res.msg == "user Registered successfully") {
            toast({
              status: "success",
              duration: 3000,
              title: "Registration Successfull!",
              isClosable: true,
            });
            navigate("/login");
          }
          console.log(res);
        })
        .catch((err) => {
          toast({
            status: "error",
            duration: 3000,
            title: "Fill all Details!!!",
            isClosable: true,
          });
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      toast({
        status: "error",
        duration: 3000,
        title: "Something Went Wrong!",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box>
        <Flex
          // pt={"-200px"}
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          m="auto"
          bg={"gray.50"}
        >
          <Stack
            spacing={8}
            mx={"auto"}
            // maxW={"lg"}
            width={"35%"}
            // py={10}
            // px={20}
            // bg={"whatsapp.50"}
          >
            <Stack align={"center"}>
              <Heading color={"#002E6E"} fontSize={"4xl"}>
                Create your account
              </Heading>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8} bg={"gray.50"}>
              <Stack spacing={2}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    focusBorderColor="#002E6E"
                    borderColor={"#002E6E"}
                    placeholder="Enter Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter @gmail.com"
                    borderColor={"#002E6E"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl id="number">
                  <FormLabel>Mobil no.</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter Mobil.no"
                    borderColor={"#002E6E"}
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter password ***"
                    borderColor={"#002E6E"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl id="confirmPass">
                  <FormLabel>confirm Password</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter confirm password ***"
                    borderColor={"#002E6E"}
                    type="password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                  />
                </FormControl>

                <Stack spacing={4}>
                  <Button
                    type="submit"
                    bg={"blue.500"}
                    color={"white"}
                    _hover={{
                      bg: "blue.600",
                    }}
                    onClick={handleRegister}
                  >
                    Sign Up
                  </Button>

                  <Box display={"flex"} justifyContent="center">
                    <Text as={"span"} textAlign={"center"}>
                      Already have Account ?{" "}
                    </Text>
                    <Text color="#002E6E" fontWeight="600" as={"span"}>
                      <Link to={"/login"}>Login</Link>
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Signup;
