// product card
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom"

  export default function ProductCard({image,id,price,ram,price2,brand,description}) { 
    return (
      <Center py={12}>
        <RouterLink  to={`/laptop/${id}`} >
        
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          // boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          boxShadow= {"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
          >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              // backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <div style={{background:"#eff0af"}} >
          <Stack pt={10} align={'center'}>
            <Text noOfLines={3} textDecoration={'none'} color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
              {brand}
            </Text>
            <Text noOfLines={3} textDecoration={'none'} color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
              {ram}
            </Text>
            <Text noOfLines={3} textDecoration={'none'} color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
              {description}
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
          </div>
        </Box>
        </RouterLink>
      </Center>
    );
  }