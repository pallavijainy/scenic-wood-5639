import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  ring,
  Stack,
  useColorModeValue as mode,
  useToast,
  Text,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
// import { cartData } from './_data'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

export const CartApp = () => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  const toast = useToast();
  const [cartData, setCartData] = useState([]);
  let Total = 0;
  if (cartData.length > 0) {
    Total = cartData.reduce((sum, el) => (sum += el.price2 * 1), 0);
  }
  // get cart data of perticular user
  const getCartData = () => {
    axios
      .get(`https://good-rose-kingfisher-tam.cyclic.app/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        setCartData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickDelete = (_id) => {
    console.log(_id);
    axios
      .delete(
        `https://good-rose-kingfisher-tam.cyclic.app/cart/delete/${_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then(({ data }) => {
        getCartData();
        toast({
          title: "Item Removed",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        console.log("data", data[0]);
      })
      .catch((err) => {
        toast({
          title: "Something Went Wrong!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  useEffect(() => {
    getCartData();
  }, []);

  // console.log("Total",Total)
  const cartLenght = cartData.length;
  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold" textAlign={"right"}>
            Shopping Cart ({cartLenght} items)
          </Heading>

          {token?.length > 0 ? (
            <Stack spacing="6">
              {cartData.length > 0 &&
                cartData.map((item) => (
                  <CartItem
                    key={item._id}
                    {...item}
                    onClickDelete={onClickDelete}
                  />
                ))}
            </Stack>
          ) : (
            <RouterLink to={"/login"}>
              {" "}
              <Text color={"blue.400"} fontSize={"20px"} textAlign={"center"}>
                Login now, To shop brand New Shoes
              </Text>
            </RouterLink>
          )}
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary CartDatalength={cartData.length} Total={Total} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("red.500", "red.200")} _hover={{ color: "red" }}>
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
