import React from 'react'
import { Box, FormLabel, Grid,Button, GridItem, Flex, Image, Heading, Input, Container, Spacer, Radio, RadioGroup, Stack, Text, Center } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const PaymentMethod = () => {
    const toast = useToast()
    const navigate=useNavigate
    const handlePay=()=>{
        setTimeout(()=>{
            toast({
                title: `Payment successful`,
                status: "success",
                isClosable: true,
              })
              console.log("home page")
            //   navigate("/home page");
        },2000)
        
    }
    return (
        <Box w="100%" alignContent={"center"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="10" m="auto">
            <Heading mb={4}>Payment Information</Heading>
            <Grid lineHeight={10}>
                <GridItem>
                    <Heading textAlign={'left'} size="md">Credit Card</Heading>
                    <RadioGroup>
                        <Box textAlign={"left"}>
                            <Radio colorScheme={'red'} isChecked>
                                <Text>Pay with credit card via Stripe</Text>
                            </Radio>
                        </Box>
                        <Box>
                            <Flex ml="5" gap="3">
                                <Image src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" w="50px" h="30px"></Image>
                                <Image src="https://logodownload.org/wp-content/uploads/2019/09/google-pay-logo.png" w="50px" h="30px" p="2"></Image>
                                <Image src="https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" w="50px" h="30px"></Image>

                            </Flex>
                        </Box>
                        {/* Paypal */}
                        <Box textAlign={"left"}>
                            <Radio isDisabled>
                                <Text>Pay with credit card via Stripe</Text>
                            </Radio>
                        </Box>
                        <Box>
                            <Flex ml="5" gap="3">
                                <Image src="https://w7.pngwing.com/pngs/294/895/png-transparent-donation-logo-pinballz-paypal-paypal-icon-blue-donation-logo.png" w="50px" h="30px" p={1}></Image>
                            </Flex>
                        </Box>
                    </RadioGroup>
                </GridItem>
            </Grid>


            {/* card info */}
            <Box mt={10}>
                <FormLabel>
                    Credit card number
                </FormLabel>
                <Input placeholder="Card number"></Input>

                <FormLabel>
                    Name on card
                </FormLabel>
                <Input placeholder="Card name"></Input>

                {/* Expire date */}
                <FormLabel>
                    Expiry date
                </FormLabel>
                <Input type={"date"}></Input>

                {/* CVV/CVC */}
                <FormLabel>
                    CVV/CVC
                </FormLabel>
                <Input placeholder="CVC"></Input>
                <Button w="100%" bgColor={"red"} mt={4} _hover={StyleSheet={bgColor:"red"}} onClick={handlePay}>Pay Now</Button>

            </Box>
        </Box>
    )
}

export default PaymentMethod