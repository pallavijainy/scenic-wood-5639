import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [userDetails, setUserDetails] = useState([]);
  let token = JSON.parse(sessionStorage.getItem("token"));
  const toast = useToast();
  useEffect(() => {
    axios
      .get(`https://good-rose-kingfisher-tam.cyclic.app/order/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCancelled = async (uID, oID) => {
    try {
      let res = await axios.patch(
        `https://good-rose-kingfisher-tam.cyclic.app/order/orderStatus/${uID}/prod/${oID}`,
        {
          order_status: "Returned",
        }
      );
      toast({
        title: "Updated Successfully.",
        description: "Product Cancelled",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      GetUserOrderDetails();
    } catch (error) {
      toast({
        title: "Invalid Request",
        description: "Please Try Again",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        p="10px"
        mb={"20px"}
      >
        <Box
          width={{ base: "10%", md: "13%", lg: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>IMAGE</Text>
        </Box>

        <Box
          width={{ base: "15%", md: "28%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>PRODUCTS</Text>
        </Box>

        <Box
          width={{ base: "10%", md: "11%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>AMOUNT</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "10%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>DATE</Text>
        </Box>
        <Box
          width={{ base: "20%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>STATUS</Text>
        </Box>
      </Box>

      {userDetails.map((user) =>
        user.product.map((order) => (
          <Box
            key={Math.random()}
            boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
            p="10px"
            mb={"10px"}
            width={"100%"}
          >
            <Box
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box width={{ base: "10%", md: "13%", lg: "15%" }}>
                <Image
                  width={"80%"}
                  src={order.image}
                  alt={order.category}
                ></Image>
              </Box>

              <Box
                width={{ base: "15%", md: "28%" }}
                fontSize={{ base: "12px", md: "12px", lg: "14px" }}
              >
                <Text>{order.details},</Text>
                <Text as={"mark"}>{order._id}</Text>
              </Box>

              <Box
                width={{ base: "10%", md: "9%" }}
                fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                textAlign={"center"}
              >
                <Text color={"gold"}>$ {order.price}</Text>
              </Box>
              <Box
                width={{ base: "10%", md: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                textAlign={"center"}
              >
                <Text>{new Date(user?.createdAt).toDateString()}</Text>
              </Box>
              <Box width={{ base: "20%", md: "15%" }} textAlign={"center"}>
                <Button
                  size={"sm"}
                  isDisabled={"true"}
                  colorScheme={
                    order.order_status == "pending"
                      ? "yellow"
                      : order.order_status == "Shipped"
                      ? "blue"
                      : order.order_status == "Returned"
                      ? "red"
                      : "green"
                  }
                  p={{ md: 1, lg: 5 }}
                >
                  {order.order_status == "pending"
                    ? "Pending"
                    : order.order_status == "Shipped"
                    ? "Shipped"
                    : order.order_status == "Returned"
                    ? "Cancelled"
                    : "Delivered"}
                </Button>
                {order.order_status == "pending" ? (
                  <Button
                    mt={3}
                    colorScheme="red"
                    onClick={() => {
                      handleCancelled(user._id, order._id);
                    }}
                  >
                    Cancel
                  </Button>
                ) : order.order_status == "Shipped" ? (
                  <Button
                    mt={3}
                    colorScheme="red"
                    onClick={() => {
                      handleCancelled(user._id, order._id);
                    }}
                  >
                    Cancel
                  </Button>
                ) : null}
              </Box>
            </Box>
            {/* ````````````````````````````````````small Screen````````````````````````````` */}
            <Box
              display={{ base: "flex", md: "none" }}
              justifyContent={"space-between"}
              p={"10px"}
            >
              {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
              <Box width={{ base: "50%", sm: "40%" }}>
                <Box
                  h="25px"
                  width={"58px"}
                  border={"1px solid Yellow"}
                  bg={"yellow.500"}
                  mb={"10px"}
                  color="black"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                    Pending
                  </Text>
                </Box>
                <Image
                  width={{ base: "60%", sm: "40%" }}
                  src={order.image}
                  alt={order.category}
                ></Image>
                <Text fontWeight={"bold"} fontSize={"lg"} mt={"20px"}>
                  $ {order.price}
                </Text>
              </Box>
              {/* ```````````````````````````````````right Div````````````````````````````` */}
              <Box
                w={{ base: "50%", sm: "60%" }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-around"}
              >
                <Box>
                  <Text fontSize={{ base: "13px", sm: "14px" }}>
                    {order.details}
                  </Text>
                  <Text
                    as={"mark"}
                    mt={"10px"}
                    fontSize={{ base: "12px", sm: "13px" }}
                  >
                    ID- {order._id}
                  </Text>
                </Box>

                <Button
                  mt={"10px"}
                  size={"sm"}
                  colorScheme={
                    order.order_status == "pending"
                      ? "yellow"
                      : order.order_status == "Shipped"
                      ? "blue"
                      : order.order_status == "Returned"
                      ? "red"
                      : "green"
                  }
                  isDisabled={true}
                >
                  {order.order_status == "pending"
                    ? "Pending"
                    : order.order_status == "Shipped"
                    ? "Shipped"
                    : order.order_status == "Returned"
                    ? "Cancelled"
                    : "Delivered"}
                </Button>
                {order.order_status == "pending" ? (
                  <Button
                    colorScheme="red"
                    mt={3}
                    onClick={() => {
                      handleCancelled(user._id, order._id);
                    }}
                  >
                    Cancel
                  </Button>
                ) : order.order_status == "Shipped" ? (
                  <Button
                    colorScheme="red"
                    mt={3}
                    onClick={() => {
                      handleCancelled(user._id, order._id);
                    }}
                  >
                    Cancel
                  </Button>
                ) : null}
              </Box>
            </Box>
          </Box>
        ))
      )}
    </>
  );
};

export default MyOrders;
