// single product details

import { useState,useEffect } from 'react';
import {  Grid,Box,Flex,Stack,Text,Heading,Image,Button
    } from "@chakra-ui/react"

import axios from 'axios';
  import {Link as RouterLink} from "react-router-dom"

  import {useParams} from "react-router-dom"
  export default function ProductDetails() {
    const [product,setProduct] = useState({})
    const [count,setCount] = useState(1)
    const {id} = useParams()
    console.log(id)
useEffect(()=>{
    axios
    .get(`https://bharatmart.onrender.com/laptop/${id}`)
    .then(({data})=>{
        setProduct(data)
    })
    .catch((err)=>console.log(err))
},[id])
const {image,description,price,price2,brand}=product
console.log(product)

function addtocart(obj){
    axios.post(`https://bharatmart.onrender.com/laptop/`, obj)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

    return (
   <Box>
    
    <Box id='detail'>
      <Box id='prodImage' >
<Image src={image} alt={brand} />
      </Box>
      <Box id='proDetail' >
        <Heading>{brand}</Heading>
        <Text>{description}</Text>
        <Box id="price" >
        <Text id="price2" >${price2}</Text>
        <Text style={{color:"tomato"}}>${price}</Text>
        </Box>
        <Box id="qnt" >
  
        </Box>
        <Box id="btns" >
        <button onClick={()=>addtocart(product)}  >Add to Cart</button>
            <RouterLink to={'/login'} ><Button>Buy Now</Button></RouterLink>
            {/* <RouterLink  to={`/cart/${id}`} ></RouterLink> */}
        </Box>
        
      </Box>
    
    </Box>
   


   </Box>
    );
  }