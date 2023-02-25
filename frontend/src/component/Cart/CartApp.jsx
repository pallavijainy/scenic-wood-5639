import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  ring,
  Stack,
  useColorModeValue as mode,
  useToast,
} from '@chakra-ui/react'
import  CartItem  from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
// import { cartData } from './_data'
import { useEffect,useState } from 'react';
import axios from "axios"

export const CartApp = () => {
const toast  = useToast()
const [cartData,setCartData] = useState([])
const Total = cartData.reduce((sum, el) => sum += el.price2 * 1, 0)
// get cart data of perticular user
const getCartData = ()=>{
  axios.get(`https://good-rose-kingfisher-tam.cyclic.app/cart`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Y5ZDNkMjY0NTg2NGRhNDIzYjZiNGYiLCJpYXQiOjE2NzczMTcwOTJ9.cxNf9jgT-B2TcAuR-7dpWbmWBjs5ZiK_FYn9I2KDCGs"
    }
  })
  .then((res)=>{
   setCartData(res.data)
    console.log(res)})
  .catch((err)=>{
    console.log(err)})
}

const onClickDelete=(_id)=>{
  console.log(_id)
  axios
  .delete(`https://good-rose-kingfisher-tam.cyclic.app/cart/delete/${_id}`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Y5ZDNkMjY0NTg2NGRhNDIzYjZiNGYiLCJpYXQiOjE2NzczMTcwOTJ9.cxNf9jgT-B2TcAuR-7dpWbmWBjs5ZiK_FYn9I2KDCGs"
    }
  })
  .then(({data})=>{
    getCartData()
    toast({
      title: 'Item Removed',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
      console.log("data",data[0]);
  })
  .catch((err)=>{
    toast({
      title: 'Something Went Wrong!',
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
    console.log(err)})
}

useEffect(()=>{
getCartData()
},[])

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
              <CartItem key={item._id} {...item} onClickDelete={onClickDelete} />
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
