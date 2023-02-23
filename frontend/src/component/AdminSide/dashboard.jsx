import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [mensData, setMensData] = useState([]);
  const [womensData, setWomensData] = useState([]);
  const [kidsData, setKidsData] = useState([]);
  const [bootsData, setBootsData] = useState([]);
  const [sandlesData, setSandlesData] = useState([]);
  const [loafersData, setLoafersData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens`)
      .then((res) => setMensData(res.data));
    axios
      .get(
        `https://good-rose-kingfisher-tam.cyclic.app/product?category=womens`
      )
      .then((res) => setWomensData(res.data));
    axios
      .get(`https://good-rose-kingfisher-tam.cyclic.app/product?category=kids`)
      .then((res) => setKidsData(res.data));
    axios
      .get(
        `https://good-rose-kingfisher-tam.cyclic.app/product?sub_category=Boots`
      )
      .then((res) => setBootsData(res.data));
    axios
      .get(
        `https://good-rose-kingfisher-tam.cyclic.app/product?sub_category=Sandles`
      )
      .then((res) => setSandlesData(res.data));
    axios
      .get(
        `https://good-rose-kingfisher-tam.cyclic.app/product?sub_category=LoafersAndOxfords`
      )
      .then((res) => setLoafersData(res.data));
  }, []);
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Dashboard</Heading>
      <Text color={"#00b5b8"}>Welcome to Dashboard</Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        width={{ base: "100%", md: "100%", lg: "95%" }}
        m={"auto"}
        mt={2}
        spacingY={10}
      >
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {mensData?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Mens
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {kidsData?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Womens
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {womensData?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Kids
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {sandlesData?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Boots
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {loafersData?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Sandles
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {bootsData?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Loafers
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
