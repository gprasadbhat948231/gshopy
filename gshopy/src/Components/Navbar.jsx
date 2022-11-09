import TopNavbar from "./Navbar/TopNavbar";
import BottomNavbar from "./Navbar/BottomNavbar";
import axios from "axios";
import React,{useEffect, useState} from "react";
import {Text,Box,Image} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import gShopy from "./gShopy.jpg";
const getData=(cat)=>{
    return axios.get(`http://localhost:3002/clothing?category=${cat}&_limit=20`);
}
function Navbar()
{
    const [data,setData]=useState([]);    
    useEffect(()=>{
        getData("Womens")
        .then((res)=>setData(res.data));
    },[])
    console.log(data);
    return(
        <div>
        <TopNavbar/>        
        <div style={{borderTop:"1px solid grey", display:"flex",width:"70%",justifyContent:"space-between",margin:"auto",paddingLeft:"15px",alignItems:"center"}}>
            <Box display="flex" width="300px"  justifyContent="space-between">
                <Text fontSize="12px" fontFamily="Montserrat,sans-serif" fontWeight="bold">WOMEN</Text>
                <Text fontSize="12px" fontFamily="Montserrat,sans-serif" fontWeight="bold">MEN</Text>
                <Text fontSize="12px" fontFamily="Montserrat,sans-serif" fontWeight="bold">KIDS</Text>
                <Text fontSize="12px" fontFamily="Montserrat,sans-serif" fontWeight="bold">/</Text>
                <Text fontSize="12px" fontFamily="Montserrat,sans-serif" fontWeight="bold">DESIGN+ART</Text>
            </Box>
            <Box>
                <Image  src={gShopy} alt="logo" width="200px" height="60px"/>
            </Box>
            <Box display="flex" width="250px"  justifyContent="space-evenly">
                <Search2Icon/>
                <Image src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png" width="20px" height="20px" alt="heart"/>
                <Image src="https://cdn-icons-png.flaticon.com/128/7244/7244661.png" width="20px" height="20px" alt="heart"/>
            </Box>
        </div>
        <BottomNavbar/>
        </div>
    )
}
export default Navbar;