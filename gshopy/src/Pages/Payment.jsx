import {Input ,Button,} from "@chakra-ui/react";
import "./cart.css";
import { useContext } from "react";
import {CartContext} from "../Cartcontext/CartContextProvider"
import {checkout} from "../Cartcontext/action";

function Payment()
{
    const {state,dispatch}=useContext(CartContext);

    const redirect=()=>{
        alert("Thanks for Shopping");
        window.location.href="/";
    }   
    return (
        <div className="payform">
            <Input isRequired placeholder="Enter Name on Card"/>            
            <Input placeholder="Enter Card Number"/>            
            <Input placeholder="Enter Cvv"/>
            <Button onClick={()=>{redirect();dispatch(checkout())}}>Proceed To Checkout ?</Button>            
        </div>
    )
}
export default Payment;