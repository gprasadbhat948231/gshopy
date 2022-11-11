import {Checkbox, Input, Menu} from "@chakra-ui/react"
import React from "react";
import { NavLink } from "react-router-dom";
import { Image,Text,Box,MenuButton,MenuItem,Button,MenuList} from "@chakra-ui/react";
import {ChevronDownIcon,EmailIcon,UnlockIcon} from "@chakra-ui/icons";
import {Popover,PopoverArrow,
    PopoverTrigger,PopoverContent,PopoverHeader,
    PopoverCloseButton,
    PopoverBody } from "@chakra-ui/react";
function TopNavbar()
{
    const initialFocusRef = React.useRef()
    return(
        <div style={{display:"flex",justifyContent:"space-between",height:"auto"}}>
        <div style={{margin:"auto",display:"flex", justifyContent:"space-between", width:"70%",paddingRight:"5px"}}> 
        <Box display="flex">
         <Box>
         <Menu>
             <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" height="auto" textDecoration="underline">
                  India
             </MenuButton>
             <MenuList display="flex" width="500px" justifyContent="space-around">
                <Box>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/206/206626.png" width="20px" height="20px"/>USA</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/7826/7826173.png" alt="countries" width="20px" height="20px"/>Albania</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/512/330/330439.png" alt="countries" width="20px" height="20px"/>India</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/330/330651.png" alt="countries" width="20px" height="20px"/>China</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/555/555451.png" alt="countries" width="20px" height="20px"/>Russia</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/4060/4060233.png" alt="countries" width="20px" height="20px"/>England</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/512/330/330490.png" alt="countries" width="20px" height="20px"/>France</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/197/197587.png" alt="countries" width="20px" height="20px"/>Romania</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/197/197386.png" alt="countries" width="20px" height="20px"/>Brazil</MenuItem>
               </Box>
               <Box>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/197/197562.png" alt="countries" width="20px" height="20px"/>South Africa</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/197/197586.png" alt="countries" width="20px" height="20px"/>Chile</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/197/197430.png" alt="countries" width="20px" height="20px"/>Canada</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/206/206600.png" alt="countries" width="20px" height="20px"/>Mexico</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/206/206694.png" alt="countries" width="20px" height="20px"/>Egypt</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/5975/5975520.png" alt="countries" width="20px" height="20px"/>Pakistan</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/512/3373/3373278.png" alt="countries" width="20px" height="20px"/>Italy</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/512/323/323380.png" alt="countries" width="20px" height="20px"/>Ireland</MenuItem>
               <MenuItem><Image src="https://cdn-icons-png.flaticon.com/128/4628/4628690.png" alt="countries" width="20px" height="20px"/>Poland</MenuItem>
               </Box>
             </MenuList>
         </Menu>
         </Box>
         <Box padding="6px">
        <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Text bg="white" textDecoration="underline" fontWeight="700" fontSize="12px" height="auto" cursor="pointer">Customer Care</Text>
      </PopoverTrigger>
        <PopoverContent bg='White' textAlign="center" height="450px">
        <PopoverHeader pt={4} fontWeight='bold' border='0' >
          <Text bg="yellow.100" marginTop="8px">Can We Help You</Text>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody width="100%">
            <Box alignItems="center" textAlign="center">
                <Box bg="blackAlpha.800" color="white" width="300px" height="auto" textAlign="center" fontSize={14} padding="10px">
                    GO TO THE CUSTOMER CARE AREA
                </Box>
                <Text fontSize="14px"borderBottom="1px solid grey" padding="10px">TRACK YOUR ORDER</Text>
                <Text fontSize="14px"borderBottom="1px solid grey" padding="10px">COMPLETE THE RETURN FORM</Text>
                <Text fontSize="14px"borderBottom="1px solid grey" padding="10px">TRACK YOUR RETURN</Text>
                <Text fontSize="20px" paddingTop="10px"  fontWeight="bold">Contact Us</Text>
                <Text fontSize="14px">M-F 9am-9pm Sydney Time</Text>
            </Box>
        </PopoverBody>
            <Box margin="auto"border="1px solid" width="250px" padding="20px" textAlign="center" bg="rgb(233, 233, 233)">
                <EmailIcon margin="auto" width="30px" height="40px" />   
                <Text textAlign="center">[E-mail]</Text> 
            </Box>        
        </PopoverContent>
        </Popover>
         </Box>
        </Box>
        <Box display="flex"  width="150px" padding="5px" justifyContent="space-between">
        <Box>
            <NavLink to="Registration"><Text color="black" fontSize="12px" textDecoration="underline" fontWeight="bolder">Register</Text></NavLink>
        </Box>
        <Box>
            {/* <Text textDecoration="underline" fontSize="12px" paddingRight="5px" fontWeight="bolder"><UnlockIcon width="12px" height="12px"/>Login</Text> */}
            <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Text bg="white" textDecoration="underline" height="auto" fontSize="12px" cursor="pointer" fontWeight="700"><UnlockIcon width="11px" height="11px"/>Login</Text>
      </PopoverTrigger>
        <PopoverContent bg='White' textAlign="center" height="450px">
        <PopoverHeader pt={4} fontWeight='bold' border='0' >
          <Text bg="yellow.100" marginTop="8px">Its great to see you again </Text>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody width="100%">
            <Box borderTop="1px solid grey"alignItems="center" textAlign="center">
                <p>Login with</p>
                <Box padding="5px" display="flex" width="300px" justifyContent="space-around">
                    <Box >
                      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3ddUG-JEnK0cxeIPAUNA10x96-Qw_PKi3Q&usqp=CAU" alt="facebook" width="120px" height="52px" border="1px solid grey"/>
                    </Box>
                    <Box>
                      <Image src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg" alt="google" width="120px" height="52px" border="1px solid grey" background="white"/>
                    </Box>
                </Box>
                <Box padding="10px">
                    <label>or with your email address</label>
                    <Input height="50px" borderRadius="none" placeholder="E-mail" fontWeight="700" color="black"/>
                    <br/>
                    <br/>
                    <Input placeholder="Password" fontWeight="700" height="50px" borderRadius="none" color="black"/>
                </Box>
                <Box display="flex" marginTop="15px" alignItems="center">
                  <Checkbox border="2px solid " height="20px" width="20px"></Checkbox>
                  <Text paddingLeft="5px"><i>Remember me</i></Text>
                </Box>
                <Box>
                  <i ><p style={{textDecoration:"underline",textAlign:"right",fontWeight:"700"}}>Forgot password?</p></i>
                  <Button borderRadius="none" width="100%" background="black" color="white" height="50px">Log in</Button>
                </Box>
            </Box>
        </PopoverBody>
        </PopoverContent>
        </Popover>
        </Box>    
        </Box>
        </div>
 </div>
    )
}
export default TopNavbar;