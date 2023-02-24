import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  ring,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import  CartItem  from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from './_data'

export const CartApp = () => {
const Total = cartData.reduce((sum, el) => sum += el.price2 * 1, 0)
// console.log("Total",Total)
const cartLenght=cartData.length;
  return (
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold" textAlign={'right'}>
            Shopping Cart ({cartLenght} items)
          </Heading>

          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">                
              <CartOrderSummary CartDatalength={cartData.length}  Total={Total} />           
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('red.500', 'red.200')} _hover={{color:"red"}}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}
