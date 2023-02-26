import React, { useState } from "react";
import {
  Box,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Container,
  Spacer,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

const ShippingAddress = ({ handleSaveAddress }) => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  return (
    // <Container border={"1px solid re"}>

    <Box
      w="600px"
      p="10"
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      m="auto"
    >
      <Heading m="3">Shipping Address</Heading>
      <Box>
        <FormLabel>Full Name</FormLabel>
        <Input
          placeholder="Enter Your name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        {/* <Spacer/> */}
        <FormLabel>Street address</FormLabel>
        <Input
          placeholder="123 Example Street"
          onChange={(e) => setStreet(e.target.value)}
        ></Input>
        {/* <Spacer/> */}

        <FormLabel>Pin Code</FormLabel>
        <Input
          placeholder="Enter Postal Pin Code"
          onChange={(e) => setPin(e.target.value)}
        ></Input>

        <FormLabel>City</FormLabel>
        <Input
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
        ></Input>
        <Button
          colorScheme="blue"
          mt={3}
          onClick={() => {
            handleSaveAddress(name, street, city, pin);
          }}
        >
          Save
        </Button>

        {/* <Spacer/> */}
      </Box>
      {/* shipment address */}
      <Box mt={8} mb={8}>
        <Heading textAlign={"left"} mb="4">
          Shipping Method
        </Heading>
        <Box>
          <RadioGroup defaultValue="1" justifyContent={"space-between"}>
            <Stack spacing={10} direction="row">
              <Radio colorScheme={"red"} value="1" textAlign={"left"}>
                Express $14.99
                <Text color={"gray.400"}>Dispatch in 24 hour</Text>
              </Radio>
              <Radio
                colorScheme={"red"}
                value="2"
                textAlign={"left"}
                isDisabled
              >
                Standard $4.99
                <Text color={"gray.400"}>Dispatch in 1-2 days</Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingAddress;
