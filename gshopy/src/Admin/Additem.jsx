import AdminNav from "./AdminNav";
import {Input,Button, Select} from "@chakra-ui/react"
import './additem.css'
import { useState } from "react";
import axios from "axios";

const postData=(cat,item)=>{
    return axios.post(`https://gshoppingdb.onrender.com/${cat}`,{
        image:item.image,
        category:item.category,
        brand:item.brand,
        title:item.title,
        price:item.price,
        original_price:item.original_price,
        offer_price:Number(item.offer_price),
        discount:item.discount
})
}
function AddItem()
{
    const [item,setItem]=useState(
        {
            image:"",
            category:"",
            brand:"",
            title:"",
            price:undefined,
            original_price:undefined,
            offer_price:undefined,
            discount:""
        });
        const handleChange=(e)=>{
            const {name,value}=e.target;
            setItem({...item,[name]:value});
        }
        const handleForm=()=>{
            console.log(item);
            postData(item.category,item);
        }
    return(
        <div>
            <AdminNav/>
            <div className="additemdiv">
                {/* <FormControl isRequire> */}
                    <label>Image</label>
                     <Input onChange={ handleChange } value={item.image} name="image" isRequired placeholder="Enter image url"/>
                     <label>Category</label>
                     <Select  placeholder="Select Category" onChange={ handleChange } value={item.category} name="category">
                         <option value="Mens">Men</option>
                         <option value="Womens">Women</option>
                     </Select>
                     <label>Brand</label>
                     <Input onChange={ handleChange } value={item.brand} name="brand" placeholder="Enter brand"/>
                     <label>Title</label>
                     <Input placeholder="Enter title" onChange={ handleChange } value={item.title} name="title"/>
                     <label>Price</label>
                     <Input type="number" placeholder="Enter price" onChange={ handleChange } value={item.price} name="price"/>
                     <label>Original price</label>
                     <Input type="number" placeholder="Enter original price" onChange={ handleChange } value={item.original_price} name="original_price"/>
                     <label>Offer_price</label>
                     <Input type="number" placeholder="Enter offer_price" onChange={ handleChange } value={item.offer_price} name="offer_price"/>
                     <label>Discount</label>
                     <Input placeholder="Enter discount" onChange={ handleChange } value={item.discount} name="discount"/>
                     <br/>
                     <Button background="black" color="white" onClick={handleForm}>Add Item</Button>
                {/* </FormControl> */}
            </div>
        </div>
    )
}
export default AddItem;