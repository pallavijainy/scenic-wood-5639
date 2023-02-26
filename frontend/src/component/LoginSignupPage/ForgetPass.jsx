import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const ForgetPass = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChangeForget = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (userData.email == "" || userData.password == "") {
      toast({
        status: "error",
        duration: 3000,
        title: "Fill all Details!!!",
        isClosable: true,
      });
      return;
    }
    axios
      .patch(
        `https://good-rose-kingfisher-tam.cyclic.app/user/resetPass`,
        userData
      )
      .then((res) => {
        console.log(res, userData);
        if (res.data.msg == "user not found") {
          toast({
            status: "error",
            duration: 3000,
            title: "User Not Found!",
            isClosable: true,
          });
        } else {
          toast({
            status: "success",
            duration: 3000,
            title: "Password Reset Successfull",
            isClosable: true,
          });
          setUserData({ email: "", password: "" });
        }
      });
  };

  return (
    <>
      <Text color={"blue.400"} onClick={onOpen} cursor={"pointer"}>
        Forget Password?
      </Text>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              value={userData.email}
              type="text"
              name="email"
              onChange={(e) => {
                handleChangeForget(e);
              }}
              placeholder="Enter Email..."
              mb={5}
            ></Input>
            <Input
              value={userData.password}
              type="text"
              name="password"
              onChange={(e) => {
                handleChangeForget(e);
              }}
              placeholder="Enter New Pass"
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ForgetPass;
