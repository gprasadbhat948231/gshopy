import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text
  } from '@chakra-ui/react'
import {SmallAddIcon,ViewIcon} from "@chakra-ui/icons";
import "./womenproduct.css";
import React, { useState,useEffect } from "react";
import axios from "axios";
import BottomMen from '../Components/Navbar/ButtomMen';
const getData=()=>{
  return axios.get(`http://localhost:3002/Mens?_limit=51`);
}
function MensProducts()
{
  const [men,setmen]=useState([]);

  useEffect(()=>{
    getData()
    .then(res=>setmen(res.data))
    .catch((err)=>console.log(err));
  },[])
    return(
        <div>
            <BottomMen/>
            <div className="heading">
                <div>
                <Breadcrumb >
                  <BreadcrumbItem>
                    <BreadcrumbLink fontSize="14px" href='#'>Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href='#' fontSize="14px">Women</BreadcrumbLink>
                  </BreadcrumbItem>    
                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#' fontSize="14px">Clothing new arrivals</BreadcrumbLink>
                  </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <h2 className='clothing'>CLOTHING NEW ARRIVALS</h2>
            </div>
            <div className='ClothContainer'>
                <div className='leftSidebar'>
                      <div className="sidebarmenu"><Text>CATEGORIES</Text><SmallAddIcon width="20px" height="20px"/></div>
                      <div className="sidebarmenu"><Text>SLEEVE STYLE</Text><SmallAddIcon width="20px" height="20px"/></div>
                      <div className="sidebarmenu"><Text>DESIGNERS</Text><SmallAddIcon width="20px" height="20px"/></div>
                      <div className="sidebarmenu"><Text>PRICE RANGE</Text><SmallAddIcon width="20px" height="20px"/></div>
                      <div className="sidebarmenu"><Text>SIZES</Text><SmallAddIcon width="20px" height="20px"/></div>
                      <div className="sidebarmenu"><Text>COLORS</Text><SmallAddIcon width="20px" height="20px"/></div>
                      <div className="sidebarmenu"><Text>PRINT</Text><SmallAddIcon width="20px" height="20px"/></div>
                      <div className="sidebarmenu"><Text>MATERIALS</Text><SmallAddIcon width="20px" height="20px"/></div>
                </div>
                <div className='dresses'>
                  {
                    men.map((item)=>(
                      <div key={item.id} className="dressCard">
                          <img className="images" src={item.image} alt={item.brand}/>
                          <div style={{display:"flex",borderBottom:"1px solid grey",justifyContent:"space-between",alignItems:"center",padding:"8px"}}>
                            <ViewIcon/>
                            <Text fontWeight="bold" fontSize="13px">-- NEW --</Text>  
                          </div>
                          <h3 className="brand">{item.brand}</h3>
                          <h4 className="title">{item.title}</h4>
                          <div className='rate'>
                          <h4 className="original">${item.original_price}</h4>
                          <h5 className="discount">{item.discount}</h5>
                          </div>
                          <h4 className="brand">US${item.offer_price}</h4>
                      </div>
                    ))
                  }
                </div>
            </div>
            
        </div>
    )
}
export default MensProducts;