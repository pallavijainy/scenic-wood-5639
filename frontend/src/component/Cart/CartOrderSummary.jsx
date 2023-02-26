import {
  border,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "./PriceTag";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = (props) => {
  const navigate = useNavigate();
  const { Total, CartDatalength } = props;
  const toast = useToast();

  const handleCheckout = () => {
    console.log("navigate to payment page");
    if (CartDatalength > 0) {
      navigate("/payment");
    } else {
      toast({
        title: "Cart is Empty!!!!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  console.log("price:", Total);

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(`${Total}`)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Text fontSize="sm" fontWeight="500">
            {formatPrice(14.99)}
          </Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline" colorScheme={"red"}>
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(`${Total + 14.99}`)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="red"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={handleCheckout}
        _focusVisible={{ border: "0px solid red" }}
        focusBorderColor={mode("red.500", "red.200")}
        _hover={{ background: "red", border: "1px solid red" }}
      >
        Checkout
      </Button>
    </Stack>
  );
};
