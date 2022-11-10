import { Text,Menu,MenuButton,MenuList,Image,Box} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
function BottomMen()
{
    return (
        <div style={{background:"rgb(64,64,64)",color:"white"}}>
            <div style={{display:"flex",padding:"8px",fontSize:"12px",fontFamily:"Montserrat,sans-serif",width:"65%",margin:"auto",justifyContent:"space-evenly"}}>
            <Menu>
             <MenuButton 
             _hover={{bg:"grey"}}
             color="white" height="auto" >
                  NEW ARRIVAL
             </MenuButton>
             <MenuList display="flex" width="1000px" bg="#f3f3f3" justifyContent="space-around">
                <Box>
               <NavLink to=""><Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px">CLOTHING</Text></NavLink>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px">SHOES</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px">ASSOCERIES & BAGS</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px" fontWeight="bold" borderBottom="1px solid grey">VIEW ALL</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">LATEST ARRIVALS</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">THIS PAST WEEK</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">TOP DESIGNERS</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">UNIQUE FINDS</Text>
               </Box>
               <Box display="flex" color="black" textAlign="center" justifyContent="space-evenly" Left="2px">
               <Box borderLeft="1px solid grey">
                    <Image src="https://www.yoox.com/images/items/45/45703381nk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" alt="countries" width="200px" height="250px"/>
                    <h3 >MAJE</h3>    
                    <h4 >US $ 786</h4>
                </Box>
               <Box>
                    <Image src="https://www.yoox.com/images/items/46/46874986ag_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" alt="countries" width="200px" height="250px"borderLeft="1px solid grey"/>
                    <h3>MM6 MAINSON</h3>
                    <h4>US $ 121.00</h4>
                </Box>
               <Box>
                    <Image src="https://www.yoox.com/images/items/12/12956627ea_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" alt="countries" width="200px" height="250px" borderLeft="1px solid grey"/>
                    <h3>BRACELET</h3>
                    <h4>US $ 121.00</h4>
               </Box>
               <Box>
                    <Image src="https://www.yoox.com/images/items/16/16174090tu_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" alt="countries" width="200px" height="250px" borderLeft="1px solid grey"/>
                    <h3>DONE WITH LEVI'S</h3>
                    <h4>US$36.4</h4>
               </Box>
               </Box>
             </MenuList>
         </Menu>
                <Text>DESIGNERS</Text>
                <Text>CLOTHING</Text>
                <Text>SHOES</Text>
                <Text>ACCESSORIES & BAGS</Text>
                <Text> 8 BOY YOOX</Text>
                <Text>YOOXYGEN</Text>
                <Text>COLLABORATION</Text>
                <Text>BEST DEALS</Text>
                <Text>GIFT GUIDE</Text>
            </div>
        </div>
    )
}
export default BottomMen;