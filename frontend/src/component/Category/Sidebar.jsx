// product card
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Select,
    Checkbox, CheckboxGroup,
    Flex
  
  } from '@chakra-ui/react';

  
  export default function SideBar() {
    return (
   <>
<Box w='20%' border='1px solid red' >
<Heading color="gray" >
    Women's Shoes
</Heading>
<Text>
    Shoes/Women
</Text>

<Select  
  h="25px"
  color='white'
  placeholder='Sort By'>
<option>Price: High to Low</option>
    <option>Price: Low  to Low</option>
    
</Select>
<Heading as='h3' size='lg'>
    Store Pickup
  </Heading>
  <Stack>
  
  <Stack  margin={'auto'} direction={['column']} >
    <Checkbox  >Red Rock Center</Checkbox>
    <Checkbox >Guam Premier</Checkbox>
    <Checkbox isInvalid>Checkbox</Checkbox>
  </Stack>

  </Stack>
  <Stack>
    <Text fontWeight="bold" >Category</Text>
    <Text>Boots</Text>
    <Text>Loafers and Oxfords</Text>
    <Text>Boat Shoes</Text>
    <Text>Clogs and Mules</Text>
    <Text>Flats</Text>
    <Text>Heels</Text>
    <Text>Slippers</Text>
    <Text>Sneakers</Text>
    <Text>Work and Safety</Text>
    
  </Stack>
  <Stack>
    <Text fontWeight="bold" >Brand</Text>
    <Text>Nike</Text>
    <Text>Vans</Text>
    <Text>Crocs</Text>
    <Text>Converse</Text>
    <Text>Sketchers</Text>
    
    
  </Stack>
  <Stack margin="auto" justifyContent="left" alignItems="center">
    <Text fontWeight="bold" >Color</Text>
    <Flex>
    <Text h='35px' w='35px' backgroundColor="black" ></Text>
    <Text >Black</Text>
    </Flex>
    <Flex>
    <Text  h='35px' w='35px' backgroundColor="brown" margin='3px' ></Text>
    <Text >Brown</Text>
    </Flex>
    <Flex>
    <Text border="1px solid black" h='35px' w='35px' backgroundColor="White" margin='3px' ></Text>
    <Text >White</Text>
    </Flex>
    <Flex>
    <Text  h='35px' w='35px' backgroundColor="gray" margin='3px' ></Text>
    <Text >Gray</Text>
    </Flex>
    <Flex>
    <Text  h='35px' w='35px' backgroundColor="teal" margin='3px' ></Text>
    <Text >Teal</Text>
    </Flex>
    
    
   
    
    
  </Stack>
  <Stack>
    <Text fontWeight="bold" >Size</Text>
    <Flex justifyContent="space-evenly">
    <Text border='1px solid black' h='35px' w='35px'  >3</Text>
    <Text border='1px solid black' h='35px' w='35px' >4</Text>
    <Text border='1px solid black' h='35px' w='35px' >5</Text>
    </Flex>
    <Flex justifyContent="space-evenly">

    <Text border='1px solid black' h='35px' w='35px' >6</Text>
    <Text border='1px solid black' h='35px' w='35px' >7</Text>
    <Text border='1px solid black' h='35px' w='35px' >8</Text>
    </Flex>
    <Flex justifyContent="space-evenly">
    <Text border='1px solid black' h='35px' w='35px'  >9</Text>
    <Text border='1px solid black' h='35px' w='35px' >10</Text>
    <Text border='1px solid black' h='35px' w='35px' >11</Text>
    </Flex>
   
    
    
  </Stack>


</Box>
   </>
    );
  }