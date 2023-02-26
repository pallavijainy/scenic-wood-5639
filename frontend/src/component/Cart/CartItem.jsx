import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import axios from "axios";
const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("red.500", "red.200")}
      {...props}
      // color={"red.500"}
      _hover={{ color: "red" }}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

const CartItem = (props) => {
  const toast = useToast();
  // const {
  //   isGiftWrapping,
  //   name,
  //   description,
  //   quantity,
  //   imageUrl,
  //   currency,
  //   price,
  //   onChangeQuantity,
  //   onClickDelete,
  // } = props
  const {
    _id,
    brand,
    details,
    size,
    image,
    price,
    price2,
    currency,
    onChangeQuantity,
    onClickDelete,
  } = props;
  const quantity = 1;

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={brand}
        description={details}
        image={image}
        isGiftWrapping={true}
        size={size}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${details} from cart`}
          colorScheme="red"
          onClick={() => {
            onClickDelete(_id);
          }}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};

export default CartItem;
