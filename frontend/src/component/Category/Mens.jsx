// main product page
import axios from "axios"
import {  Grid,Box,Flex,Stack,Text,Heading,
    GridItem} from "@chakra-ui/react"
import {useEffect,useState} from "react"
import ProductCard from "./ProductCard"
import SideBar from "./Sidebar"
import Pagination from "./Pagination"

const Product=()=>{
const [data,setData] = useState([])
const[page,setPage] = useState(1)


useEffect(()=>{
    axios.get(`https://bharatmart.onrender.com/laptop?_page=${page}&_limit=20`).then((res)=>{
        console.log(res.data)
        setData(res.data)
        
    })
    },[page])

    return(
        <>
   
        
<Flex>
    <SideBar/>
<Grid templateColumns='repeat(4, 1fr)' gap={6}> 
    {/* mapping product */}
{
    data?.length>0 && data.map((e)=>{
return (
<GridItem key={e.id} >
    {/* mapping in card */}
<ProductCard

image={e.image}
id={e.id}
brand = {e.brand}
description={e.description}
ram={e.ram}
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
export default Product