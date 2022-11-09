import { Text,Menu,MenuButton,MenuList,Image,Box} from "@chakra-ui/react";

function BottomNavbar()
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
             <MenuList display="flex" width="auto" bg="#f3f3f3" justifyContent="space-around">
                <Box>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px">CLOTHING</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px">SHOES</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px">ASSOCERIES & BAGS</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="5px"marginBottom="7px" fontWeight="bold" borderBottom="1px solid grey">VIEW ALL</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">LATEST ARRIVALS</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">THIS PAST WEEK</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">TOP DESIGNERS</Text>
               <Text color="black" fontFamily="Montserrat,sans-serif" padding="7px" marginTop="7px">UNIQUE FINDS</Text>
               </Box>
               <Box>
               <Box>
                    <Image src="https://www.yoox.com/images/items/14/14270715xr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" alt="countries" width="20px" height="20px"/>
                </Box>
               <Box>
                    <Image src="" alt="countries" width="20px" height="20px"/>
                </Box>
               <Box>
                    <Image src="" alt="countries" width="20px" height="20px"/>
               </Box>
               <Box>
                    <Image src="" alt="countries" width="20px" height="20px"/>
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
export default BottomNavbar;