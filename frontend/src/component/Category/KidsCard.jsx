// product card
import {
    Box,
    Center,
   
    Text,
    Stack,
    Image,
  
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom"
  
  export default function KidsCard({image,id,price,price2,brand,details}) { 
    return (
      <Center py={12}>
        <RouterLink  to={`/product/${id}`} >
        
        <Box
          role={'group'}
          p={6}
          
          w={'full'}
         
          // boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          
          boxShadow= {"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
          >
          <Box
          
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'150px'}>
            <Image
              rounded={'lg'}
             
              width={"80%"}
             
              src={image}
            />
          </Box>
          <Box style={{background:"white"}} >
          <Stack pt={10} align={'center'}>
            <Text noOfLines={3} textDecoration={'none'} color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
              {brand}
            </Text>
          
            <Text noOfLines={3} textDecoration={'none'} color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
              {details}
            </Text>
       
            <Stack direction={'row'} align={'center'}>
              <Text textDecoration={'none'}  color={'tomato'} fontWeight={800} fontSize={'xl'}>
               ${price}
              </Text>
              <Text color={'gray'} textDecoration={'line-through'} > 
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