// product card
import { Box, Center, Text, Stack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function WomenCard({
  image,
  id,
  price,
  price2,
  brand,
  details,
}) {
  return (
    <Center py={12}>
      <RouterLink to={`/product/${id}`}>
        <Box
          // role={"group"}
          p={6}
          height={"320px"}
          // boxShadow={'2xl'}
          rounded={"lg"}
          // pos={"relative"}
          boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
        >
          <Box rounded={"lg"}>
            <Image rounded={"lg"} width={"100%"} src={image} />
          </Box>
          <Box style={{ background: "white" }}>
            <Stack pt={10}>
              <Text
                noOfLines={3}
                textDecoration={"none"}
                color={"blue.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {brand}
              </Text>

              <Text
                noOfLines={3}
                textDecoration={"none"}
                color={"black"}
                fontSize={"lg"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                {details}
              </Text>

              <Stack direction={"row"} align={"center"}>
                <Text
                  textDecoration={"none"}
                  color={"tomato"}
                  fontWeight={800}
                  fontSize={"xl"}
                >
                  ${price}
                </Text>
                <Text color={"gray"} textDecoration={"line-through"}>
                  ${price2}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </RouterLink>
    </Center>
  );
}
