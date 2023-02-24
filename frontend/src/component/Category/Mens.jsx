// main product page
import axios from "axios"
import {  Grid,Box,Flex,Stack,Text,Heading,Checkbox,Select,Menu,MenuButton,MenuList,MenuItem,
    GridItem} from "@chakra-ui/react"
import {useEffect,useState} from "react"
// import ProductCard from "./ProductCard"
import SideBar from "./Sidebar"
import Pagination from "./Pagination"
import WomenCard from "./WomenCard"

const mens=()=>{
const [data,setData] = useState([])
const[page,setPage] = useState(1)
const[asortdata,setAsortdata]=useState([])
const[dsortdata,setDsortdata]=useState([])
const[color,setColor]=useState(false)
const[sortdata,setSortdata]=useState("asc")




useEffect(()=>{
    axios.get(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens&sort=${sortdata}&page=${page}&limit=16`).then((res)=>{
        console.log(res.data)
        setData(res.data)
        
    })
    },[page,sortdata])




function HandleChange(e){
  setSortdata(e.target.value)

  }










  const  sandle=async(page)=>{
           
    let res = await fetch(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens&sub_category=Sandles&page=${page}&limit=16`)
    let data = await res.json()
    setData(data);
    console.log(data);
}
  const  boots=async(page)=>{
           
    let res = await fetch(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens&sub_category=Boots&page=${page}&limit=16`)
    let data = await res.json()
    setData(data);
    console.log(data);
}
  const  oxford=async(page)=>{
           
    let res = await fetch(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens&sub_category=LoafersAndOxfords&page=${page}&limit=16`)
    let data = await res.json()
    setData(data);
    console.log(data);
}
  const  nike=async(page)=>{
           
    let res = await fetch(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens&brand=nike&page=${page}&limit=16`)
    let data = await res.json()
    setData(data);
    console.log(data);
}
  const  vans=async(page)=>{
           
    let res = await fetch(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens&brand=vans&page=${page}&limit=16`)
    let data = await res.json()
    setData(data);
    console.log(data);
}
  const  crocs=async(page)=>{
           
    let res = await fetch(`https://good-rose-kingfisher-tam.cyclic.app/product?category=mens&brand=crocs&page=${page}&limit=16`)
    let data = await res.json()
    setData(data);
    console.log(data);
}
  const  wrap=()=>{
           const colordiv = document.getElementById("color")
setColor(!color)
console.log(color);
if(color===true){
  colordiv .display="none"
}else{
  colordiv .display="visible"
}
 
}
// --------------------------------------


    return(
        <>
   
        
<Flex>
   
    {/* ---------------------------------------------------- */}

    <Box w='20%' border='1px solid red' >
<Heading color="gray" >
    Women's Shoes
</Heading>
<Text>
    Shoes/Women
</Text>

<Select  onChange={(e)=>{HandleChange(e)}} 
  h="25px"
  color='white'
  placeholder='Sort By'>
<option value="desc">Price: High to Low</option>
    <option value="asc">Price: Low  to High</option>
    
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
    <Text onClick={boots} cursor="pointer">Boots</Text>
    <Text onClick={oxford} cursor="pointer">Loafers and Oxfords</Text>
    <Text id="sandle" onClick={sandle} cursor="pointer" >Sandles</Text>
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
    <Text onClick={nike} cursor="pointer">Nike</Text>
    <Text onClick={vans} cursor="pointer">Vans</Text>
    <Text onClick={crocs} cursor="pointer">Crocs</Text>
    <Text>Converse</Text>
    <Text>Sketchers</Text>
    
    
  </Stack>
  <Stack margin="auto" justifyContent="left" alignItems="center">
    <Box marginTop={'5px'} id="color" onClick={wrap} display='none' >Color
    {/* <Text fontWeight="bold" >Color</Text> */}
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
    
    </Box>
   {/* <Menu>
    <MenuButton w='100%' p="10px 20px">
      <Flex>
        <Text>
Brand +
        </Text>
        
      </Flex>
    </MenuButton>
    <MenuList borderRadius='none'>
      <MenuItem w='100%' p="10px 20px" border='none' >Nike</MenuItem>
      <MenuItem w='100%' p="10px 20px" border='none'>Vans</MenuItem>
      <MenuItem w='100%' p="10px 20px" border='none'>Crocs</MenuItem>
      <MenuItem w='100%' p="10px 20px" border='none'>Converse</MenuItem>
      <MenuItem w='100%' p="10px 20px" border='none'>Sketchers</MenuItem>
    </MenuList>
   </Menu> */}
    
    
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
    {/* --------------------------------------------------------- */}
<Grid templateColumns='repeat(4, 1fr)' gap={6}> 
    {/* mapping product */}
{
    data?.length>0 && data.map((e)=>{
return (
<GridItem key={e.id} >
    {/* mapping in card */}
<WomenCard

image={e.image}
id={e._id}
brand = {e.brand}
details={e.details}

price2={e.price2}
price={e.price}



/>
</GridItem>
     ) })
}

</Grid>


</Flex>
<Box id="paginate" margin="auto" justifyContent="center" alignItems="center"  >
                
            <Pagination current={page} total={10} onChange={(value)=>setPage(value)} />
            </Box>
</>

    )
}
export default mens