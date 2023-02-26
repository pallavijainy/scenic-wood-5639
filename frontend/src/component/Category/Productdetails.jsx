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
  const { image, details, price, price2, brand } = product;
  console.log(product.image);

  function addtocart() {
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
  return (
    <>
      <Navbar />
      <Box>
        {/* navbar---- */}

        <Box id="detail">
          <Flex justifyContent="space-around">
            <Box w="50%" h="300px" id="prodImage">
              <Image
                w="auto"
                margin="auto"
                marginTop="30px"
                src={image}
                alt={brand}
              />
            </Box>

            <Box w="50%" h="300px" id="proDetail">
              <Heading marginLeft="50%" marginTop="15px">
                {details}
              </Heading>
              <Text
                fontWeight="bold"
                color="gray"
                marginLeft="50%"
                marginTop="15px"
              >
                {brand}
              </Text>
              <Box id="price">
                <Flex marginLeft="50%" w="20%">
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
                <Text marginLeft="50%" fontWeight="bold">
                  Ship To Address
                </Text>
                <Text w="24%" marginLeft="50%">
                  Receive in 4-7 business days with standard
                </Text>

                <Button
                  margin="15px"
                  w="170px"
                  colorScheme="green"
                  color="white"
                  marginLeft="47%"
                  onClick={() => addtocart()}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </Flex>
          <Flex>
            <Box w="50%" h="300px">
              <Text fontWeight="bold" marginLeft="20%">
                Product Details
              </Text>
              <UnorderedList>
                <ListItem marginLeft="20%">
                  Transparent mesh and synthetic upper in a lifestyle sneaker
                  style with a round toe
                </ListItem>
                <ListItem marginLeft="20%">Lace-up closure</ListItem>
                <ListItem marginLeft="20%">Heel pull tab</ListItem>
                <ListItem marginLeft="20%">Collapsible heel</ListItem>
                <ListItem marginLeft="20%">
                  Padded tongue for increased comfort
                </ListItem>
                <ListItem marginLeft="20%">
                  Soft lining with cushioned insole
                </ListItem>
                <ListItem marginLeft="20%">
                  Lifted platform foam midsole
                </ListItem>
                <ListItem marginLeft="20%">Durable traction outsole</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>

        {/* footer---------------------- */}
      </Box>
    </>
  );
}
