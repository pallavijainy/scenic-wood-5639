import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import MyOrders from "./MyOrders";
const MyAccount = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const bg = useColorModeValue("purple.400", "#060309");
  const bodyBg = useColorModeValue("white", "#0f0617");
  const colors = useColorModeValue("red.600", "white");
  const valueColor = useColorModeValue("gray", "rgba(255, 255, 255, 0.16)");
  const [userDetails, setUserDetails] = useState({});
  const token = JSON.parse(sessionStorage.getItem("token"));

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
    <Container padding="0px" maxW="100%" mt={"150px"}>
      <Box
        width={{ base: "95%", md: "90%" }}
        height="630px"
        m="auto"
        border="1px solid"
        borderColor={useColorModeValue("white", "#291d34")}
      >
        <Tabs>
          <TabList
            flexDirection="column"
            float="left"
            border="none"
            width={{ base: "30%", md: "27%" }}
            bg="#291d34"
            height="630px"
          >
            <Box>
              <Tab
                height="60px"
                color={useColorModeValue("white", "rgba(255, 255, 255, 0.24)")}
                _selected={{ color: colors }}
              >
                My Profile
              </Tab>
            </Box>
            <Box>
              <Tab
                height="60px"
                color={useColorModeValue("white", "rgba(255, 255, 255, 0.24)")}
                _selected={{ color: colors }}
              >
                My Orders
              </Tab>
            </Box>
          </TabList>
          <TabPanels padding="10px">
            <Box width="70%" float="right">
              <TabPanel padding="10px" textAlign="left">
                <Heading fontSize="30px">My Profile</Heading>
                <Stack>
                  <Divider m="auto" w="100%" height="30px" />
                </Stack>

                <Box marginTop="20px">
                  <Box width="100%">
                    <FormControl width={{ base: "48%", md: "40%" }}>
                      <FormLabel>First name</FormLabel>
                      <Input
                        color={valueColor}
                        required
                        readOnly
                        value={userDetails.name}
                      />
                    </FormControl>
                  </Box>
                  <FormControl>
                    <FormLabel>Phone No</FormLabel>
                    <Input
                      required
                      color={valueColor}
                      readOnly
                      value={userDetails.number}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      color={valueColor}
                      required
                      readOnly
                      value={userDetails.email}
                    />
                  </FormControl>
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <InputGroup size="md" width={{ base: "80%", md: "92%" }}>
                      <Input
                        color={valueColor}
                        required
                        readOnly
                        name="Password"
                        pr="4.5rem"
                        value={userDetails.confirmPass}
                        type={show ? "text" : "password"}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {/* change Password */}
                    {/* <ChangePassword id={"inputUserDetails[0].id"} /> */}
                  </FormControl>
                </Box>
              </TabPanel>
            </Box>
            {/* My Orders Content */}
            <Box width="70%" float="right">
              <TabPanel padding="10px" textAlign="left">
                <Heading fontSize="30px">My Orders</Heading>
                <Stack>
                  <Divider m="auto" w="100%" height="30px" />
                </Stack>
                <MyOrders />
              </TabPanel>
            </Box>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </Container>
  );
};
export default MyAccount;
