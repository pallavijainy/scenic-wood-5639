import React from 'react'
import PaymentMethod from '../component/Payment/PaymentMethod'
import ShippingAddress from '../component/Payment/ShippingAddress'
import { Grid, GridItem,Box, Center } from '@chakra-ui/react'
const Payment = () => {
    return (
        <Box m="auto"   p="8" style={{width:"100%"}}>
            <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(1rs,1fr)",xl:"repeat(2,1fr)"}}  gap={10}>
                {/* address section */}
                <GridItem ><ShippingAddress /></GridItem>
                {/* payment information  */}
                <GridItem><PaymentMethod /></GridItem>
            </Grid>
        </Box>
    )
}

export default Payment