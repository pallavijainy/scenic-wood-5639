import { Grid, GridItem, Box, Container, Text, Flex, Link, Center, Button, Input, Divider, Image } from '@chakra-ui/react'
import React from 'react'
import CartItem from '../component/Cart/CartItem'

import { CartApp } from '../component/Cart/CartApp'
import { QuestionOutlineIcon, WarningIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { FaBoxOpen,FaMobileAlt,FaGift } from "react-icons/fa"
import { ImStopwatch } from "react-icons/im"




const Cart = () => {
    return (
        <Box w="100%" p="4" mt={"150px"}>
            {/* find store */}
            <Flex alignContent={'space-between'} gap="50%">
                <Flex>
                <Image src="https://user-images.githubusercontent.com/104529601/220612628-f256d676-adcc-4e17-8ff1-dcbc47de3ad8.png " w="7" h="7" alignItems={"Center"}  />
                <Link textDecoration={"underline"} colorScheme="red">Find a Store</Link>
                </Flex>
                <Box><Text textAlign={"right"}>Free Shipping for Rewards or Orders $75+</Text></Box>
                
            </Flex>

            {/* cartItem and cart summary */}
            <CartApp />

            {/* Recomended product */}

            {/* notes for customer  */}
            <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(3,1fr)']} gap="20" mb={2} mt="8">
                <GridItem >
                    <Flex gap={4}>
                        <Center >
                            <QuestionOutlineIcon />
                        </Center>
                        <Center>
                            <Text color={"gray"} textAlign="left">Need Help?<Link>Email us</Link> or call us at 888-869-1053Cart Number: 999909990</Text>
                        </Center>
                    </Flex>
                </GridItem>
                <GridItem >
                    <Flex gap={4}>
                        <Center >
                            <WarningIcon />
                            {/* <CiCircleAlert/> */}
                        </Center>
                        <Center>
                            <Text color={"gray"} textAlign="left">Please note: We cannot split orders for shipment to multiple addresses.</Text>
                        </Center>
                    </Flex>
                </GridItem>
            </Grid>

            {/* signup and email */}
            <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)']} m={2} mt="50px">
                <GridItem>
                    <Text textAlign={"left"}>Sign up for special offers & trend updates1</Text>
                </GridItem>

                <GridItem>
                    <Box border={"2px solid gray"}>
                        <Flex>
                            <Input placeholder="EMAIL" color="Gray" border={"0px"} _focusVisible={{border:"0px solid red"}}></Input>
                            <Button colorScheme={"red"} color="white" _hover={{border:"2px solid red"}} >SIGN UP</Button>
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>

            <Divider orientation='horizontal' mt={10} mb={10} />

            {/* red icons */}

            <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(4,1fr)']}>
                <Flex textAlign={"left"}>
                <Box m="2"><FaBoxOpen mt={1} size="40px" color='#D50032' /></Box>
                    <Flex direction={"column"}>                    
                        <Text>Free Shipping for Members</Text>
                        <Text color={"gray"}>Plus, return your purchase to any store, at any time.</Text>
                    </Flex>
                    <Divider orientation='vertical' ml={2} mr={2} />
                </Flex>
                {/* <Divider orientation='vertical' /> */}
                <Flex textAlign={"left"}>
                <Box m="2"><FaGift mt={1} size="40px" color='#D50032' /></Box>
                    <Flex direction={"column"}>                        
                        <Text>Famous Gift Cards</Text>
                        <Text color={"gray"}>Fits every time! Physical card or instant eGift Card.</Text>
                    </Flex>
                    <Divider orientation='vertical' ml={2} mr={2} />
                </Flex>

                <Flex textAlign={"left"}>
                    <Box m="2"><ImStopwatch mt={1} size="40px" color='#D50032' /></Box>
                    <Flex direction={"column"}>
                        <Text>Famously Fast Pickup</Text>
                        <Text color={"gray"}>Order online, pick up in store or at the curb. Plus, members earn a bonus reward!</Text>
                    </Flex>
                    <Divider orientation='vertical' ml={2} mr={2} />
                </Flex>
                {/* <Divider orientation='vertical' /> */}
                <Flex textAlign={"left"}>
                    <Box m="2"><FaMobileAlt mt={1} size="40px" color='#D50032' /></Box>
                    <Flex direction={"column"}>
                        <Text>Pay Your Way</Text>
                        <Text color={"gray"}>Enjoy Zip, the Famously YOU Rewards® Credit Card and more.</Text>
                    </Flex>
                </Flex>
            </Grid>

        </Box>
    )
}

export default Cart