import React from "react";
import {CartContext} from "../Cartcontext/CartContextProvider";
import {checkout,removeFromCart} from "../Cartcontext/action";
import {useContext} from "react";
import { Button,FormControl,Input, Textarea } from "@chakra-ui/react";
import "./cart.css";

function Cart()
{
    const {state,dispatch}=useContext(CartContext);
    console.log(state);
    return(
        <div className="cart_container">
            <div className="item_container">
            {
            state.map((item)=>(
                <div key={item.id} className="item_card">
                    <img src={item.image} className="imageSize" alt="text"/>
                    <div>
                        <h4 style={{fontWeight:"700"}}>{item.brand}</h4>
                        <h4 style={{fontWeight:"300"}}>{item.title}</h4>
                        <h4 style={{fontWeight:"700"}}>₹{item.offer_price}</h4>
                        <Button onClick={()=>dispatch(removeFromCart(item.id))}>Remove Item</Button>
                    </div>
                </div>   
            ))}
            </div>
            <div>
                <h1>Final Price:- ₹{Math.round(state.reduce((a,c)=>a+c.offer_price,0))}</h1>
            </div>
            <div className="delivery">
                <h2>Fill the form to checkout</h2>
                <FormControl isRequired>
                    <label>Enter Name</label>
                    <Input borderRadius="none" placeholder="Enter your Name"/>
                    <br/>
                    <br/>
                    <label>Enter Address</label>
                    <Textarea borderRadius="none" placeholder="Enter your Address"/>
                    <br/>
                    <br/>
                    <label>Enter Phone Number</label>
                    <Input borderRadius="none" placeholder="Enter Phone Number"/>
                    <br/>
                    <br/>
                    <Button width="100%" borderRadius="none" onClick={()=>console.log("clik")}>Place Order</Button>
                </FormControl>
            </div>
        </div>
    )
}
export default Cart