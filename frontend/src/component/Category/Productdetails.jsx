// single product details

import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Image,
  Button,
  UnorderedList,
  ListItem,
  useToast,
  OrderedList,
} from "@chakra-ui/react";

import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function ProductDetails() {
  let token = JSON.parse(sessionStorage.getItem("token"));
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`https://good-rose-kingfisher-tam.cyclic.app/product/${id}`)
      .then(({ data }) => {
        setProduct(data[0]);
        console.log("data", data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function addtocart() {
    console.log(product);
    axios
      .post(`https://good-rose-kingfisher-tam.cyclic.app/cart/add`, product, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.message == `jwt must be provided`) {
          toast({
            title: "User not Logged In",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          return;
        }

        toast({
          title: "Item Added",
          description: "Item is Added To Cart.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        console.log(res);
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Something Went Wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      });
  }
  const { image, details, price, price2, brand } = product;
  return (
    <>
      <Navbar />
      <Box>
        <Box id="detail">
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-around"}
          >
            <Box w={{ base: "100%", md: "50%" }} id="prodImage" p={5}>
              <Image
                w={{ base: "60%", md: "80%" }}
                margin="auto"
                src={image}
                alt={brand}
              />
            </Box>

            <Box
              w={{ base: "100%", md: "50%" }}
              margin={"auto"}
              p={5}
              id="proDetail"
            >
              <Heading marginTop="15px">{details}</Heading>
              <Text fontWeight="bold" color="gray" marginTop="15px">
                {brand}
              </Text>
              <Box id="price">
                <Flex>
                  <Text style={{ color: "tomato" }}>${price}</Text>
                  <Text
                    textDecoration="line-through"
                    marginLeft="5px"
                    id="price2"
                  >
                    ${price2}
                  </Text>
                </Flex>
              </Box>

              <Box id="btns">
                <Text fontWeight="bold">Ship To Address</Text>
                <Text>Receive in 4-7 business days with standard</Text>

                <Button
                  colorScheme="green"
                  color="white"
                  mt={5}
                  onClick={() => addtocart()}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </Flex>
          <Flex>
            <Box w={{ base: "100%", md: "50%" }} p={5}>
              <Text fontWeight="bold">Product Details</Text>
              <UnorderedList>
                <ListItem>
                  Transparent mesh and synthetic upper in a lifestyle sneaker
                  style with a round toe
                </ListItem>
                <ListItem>Lace-up closure</ListItem>
                <ListItem>Heel pull tab</ListItem>
                <ListItem>Collapsible heel</ListItem>
                <ListItem>Padded tongue for increased comfort</ListItem>
                <ListItem>Soft lining with cushioned insole</ListItem>
                <ListItem>Lifted platform foam midsole</ListItem>
                <ListItem>Durable traction outsole</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
