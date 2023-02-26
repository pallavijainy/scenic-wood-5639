// main product page
import axios from "axios";
import {
  Grid,
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Checkbox,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Pagination from "./Pagination";
import WomenCard from "./WomenCard";
import Footer from "../Footer/Footer";

const Womens = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortdata, setSortdata] = useState("asc");

  useEffect(() => {
    axios
      .get(
        `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens&sort=${sortdata}&page=${page}&limit=16`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, [page, sortdata]);

  function HandleChange(e) {
    setSortdata(e.target.value);
  }

  const sandle = async (page) => {
    let res = await fetch(
      `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens&sub_category=Sandles&page=${page}&limit=16`
    );
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  const boots = async (page) => {
    let res = await fetch(
      `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens&sub_category=Boots&page=${page}&limit=16`
    );
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  const oxford = async (page) => {
    let res = await fetch(
      `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens&sub_category=LoafersAndOxfords&page=${page}&limit=16`
    );
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  const nike = async (page) => {
    let res = await fetch(
      `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens&brand=nike&page=${page}&limit=16`
    );
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  const vans = async (page) => {
    let res = await fetch(
      `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens&brand=vans&page=${page}&limit=16`
    );
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  const crocs = async (page) => {
    let res = await fetch(
      `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens&brand=crocs&page=${page}&limit=16`
    );
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  // --------------------------------------

  return (
    <>
      <Box mt={"150px"}>
        {/* add navbar */}

        <Flex>
          {/* ---------------------------------------------------- */}

          <Box w="25%" p={10}>
            <Heading color="gray">Women's Shoes</Heading>
            <Text marginTop="10px">Shoes/womens</Text>

            <Select
              mt={5}
              border={"none"}
              borderBottom={"1px solid"}
              onChange={(e) => HandleChange(e)}
              placeholder="Sort By"
            >
              <option value="desc">Price: High to Low</option>
              <option value="asc">Price: Low to High</option>
            </Select>
            <hr />
            <Divider mt={6} borderColor={"gray"} />
            <Heading marginTop="15px" as="h3" size="lg" color={"gray"}>
              Store Pickup
            </Heading>
            <Stack>
              <Stack direction={["column"]} spacing={"15px"} mt={5}>
                <Checkbox>Red Rock Center</Checkbox>
                <Checkbox>Guam Premier</Checkbox>
                <Checkbox isInvalid>Checkbox</Checkbox>
              </Stack>
            </Stack>

            <Divider mt={6} borderColor={"gray"} />

            {/* --------------------------- */}
            <Accordion defaultIndex={[0]} mt={6} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    margin="auto"
                    justifyContent="left"
                    alignItems="center"
                  >
                    <Text onClick={boots} cursor="pointer">
                      Boots
                    </Text>
                    <Text onClick={oxford} cursor="pointer">
                      Loafers
                    </Text>
                    <Text id="sandle" onClick={sandle} cursor="pointer">
                      Sandles
                    </Text>
                    <Text>Boat Shoes</Text>
                    <Text>Clogs and Mules</Text>
                    <Text>Flats</Text>
                    <Text>Heels</Text>
                    <Text>Slippers</Text>
                    <Text>Sneakers</Text>
                    <Text>Work and Safety</Text>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    margin="auto"
                    justifyContent="left"
                    alignItems="center"
                  >
                    <Text onClick={nike} cursor="pointer">
                      Nike
                    </Text>
                    <Text onClick={vans} cursor="pointer">
                      Vans
                    </Text>
                    <Text onClick={crocs} cursor="pointer">
                      Crocs
                    </Text>
                    <Text>Converse</Text>
                    <Text>Sketchers</Text>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    margin="auto"
                    justifyContent="left"
                    alignItems="center"
                  >
                    <Flex>
                      <Text h="35px" w="35px" backgroundColor="black"></Text>
                      <Text>Black</Text>
                    </Flex>
                    <Flex>
                      <Text
                        h="35px"
                        w="35px"
                        backgroundColor="brown"
                        margin="3px"
                      ></Text>
                      <Text>Brown</Text>
                    </Flex>
                    <Flex>
                      <Text
                        border="1px solid black"
                        h="35px"
                        w="35px"
                        backgroundColor="White"
                        margin="3px"
                      ></Text>
                      <Text>White</Text>
                    </Flex>
                    <Flex>
                      <Text
                        h="35px"
                        w="35px"
                        backgroundColor="gray"
                        margin="3px"
                      ></Text>
                      <Text>Gray</Text>
                    </Flex>
                    <Flex>
                      <Text
                        h="35px"
                        w="35px"
                        backgroundColor="teal"
                        margin="3px"
                      ></Text>
                      <Text>Teal</Text>
                    </Flex>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Size
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack>
                    <Flex justifyContent="space-evenly">
                      <Text border="1px solid black" h="35px" w="35px">
                        3
                      </Text>
                      <Text border="1px solid black" h="35px" w="35px">
                        4
                      </Text>
                      <Text border="1px solid black" h="35px" w="35px">
                        5
                      </Text>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Text border="1px solid black" h="35px" w="35px">
                        6
                      </Text>
                      <Text border="1px solid black" h="35px" w="35px">
                        7
                      </Text>
                      <Text border="1px solid black" h="35px" w="35px">
                        8
                      </Text>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Text border="1px solid black" h="35px" w="35px">
                        9
                      </Text>
                      <Text border="1px solid black" h="35px" w="35px">
                        10
                      </Text>
                      <Text border="1px solid black" h="35px" w="35px">
                        11
                      </Text>
                    </Flex>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* -------------------------------- */}
          </Box>
          {/* --------------------------------------------------------- */}
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {/* mapping product */}
            {data?.length > 0 &&
              data
                .filter((el) => el.active == true)
                .map((e) => (
                  <GridItem key={e.id}>
                    <WomenCard
                      image={e.image}
                      id={e._id}
                      brand={e.brand}
                      details={e.details}
                      price2={e.price2}
                      price={e.price}
                    />
                  </GridItem>
                ))}
          </Grid>
        </Flex>
        <Box id="paginate" textAlign={"center"}>
          <Pagination
            current={page}
            total={4}
            onChange={(value) => setPage(value)}
          />
        </Box>
        <Box>{/* footer-------------- */}</Box>
      </Box>
      <Footer />
    </>
  );
};
export default Womens;
