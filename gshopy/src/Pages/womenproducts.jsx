import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    Box,
    Button,
    Select,
  } from '@chakra-ui/react'
import {SmallAddIcon,ViewIcon} from "@chakra-ui/icons";
import "./womenproduct.css";
import BottomNavbar from "../Components/Navbar/BottomNavbar"
import React, { useState,useEffect,useContext} from "react";
import axios from "axios";

import { addTocart } from "../Cartcontext/action";
import { CartContext } from "../Cartcontext/CartContextProvider";

const getData=(page,sort)=>{
  return axios.get(`https://gshoppingdb.onrender.com/womens?_sort=offer_price&_order=${sort}&_page=${page}_limit=12`);
}

function WomensProduct()
{
  const [women,setWomen]=useState([]);
  const {state,dispatch}=useContext(CartContext);
  const [page,setPage]=useState(1);
  const [order,setOrder]=useState("desc");

  const fetchData=(page,order)=>{
    getData(page,order)
    .then(res=>setWomen(res.data))
    .catch((err)=>console.log(err));
  }
  useEffect(()=>{
    fetchData(page,order);
  },[page,order])

  const itemalreadyexist=(id,cartItems)=>{
    if(cartItems.find((item)=>item.id===id))
    {
      return true;
    }
    else 
      return false;
  }
  const handlePage=(val)=>{
    const value=page+val;
    setPage(value);
  }
  const handleSort=(e)=>{
    setOrder(e.target.value);
    fetchData(page,order);
  }
    return(
        <div>
          <BottomNavbar/>
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
                <div>
                  <Box display="flex" >
                   <Box width="200px" marginLeft="100px" marginBottom="5px">
                      <Select name="sort" placeholder="Sort by Price" onChange={handleSort}>
                            <option value="asc">Price Low to High</option>
                            <option value="desc">Price High to Low</option>
                      </Select>
                    </Box>
                  </Box>
                <div className='dresses'>
                  {
                    women.map((item)=>(
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
                          <Box display="flex" alignItems="center" justifyContent="space-around">
                          <h4 className="brand">US${item.offer_price}</h4>
                          <Button cursor="pointer" disabled={itemalreadyexist(item.id,state)} onClick={()=>dispatch(addTocart(item))}  width="100px" height="30px" alt="heart">Add To Cart</Button>
                          </Box>
                      </div>
                    ))
                  }
                </div>
                </div>
            </div>
            <div className='pagination'>
                  <Button disabled={page===1} onClick={()=>handlePage(-1)}>Prev</Button>
                  <Button disabled>{page}</Button>
                  <Button disabled={page===9}onClick={()=>handlePage(1)}>Next</Button>
            </div>
            
        </div>
    )
}
export default WomensProduct;