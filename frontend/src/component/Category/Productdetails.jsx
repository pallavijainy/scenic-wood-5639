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

useEffect(()=>{
    axios
    .get(`https://good-rose-kingfisher-tam.cyclic.app/product/${id}`)
    .then(({data})=>{
        setProduct(data[0])
        console.log("data",data[0]);
    })
    .catch((err)=>console.log(err))
},[id])
const {image,details,price,price2,brand}=product
console.log(product.image)

function addtocart(obj){
    axios.post(`https://good-rose-kingfisher-tam.cyclic.app/cart/`, obj)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    console.log(obj);
}

    return (
   <Box>
    
    <Box id='detail'>
      <Box id='prodImage' >
<Image src={image} alt={brand} />
      </Box>
      <Box id='proDetail' >
        <Heading>{brand}</Heading>
        <Text>{details}</Text>
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