import {Box,Text,Input, Radio, RadioGroup, Checkbox,Button} from "@chakra-ui/react"
import {EmailIcon} from "@chakra-ui/icons";
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaPinterest,FaTiktok} from "react-icons/fa"
import React from "react";

function Footer()
{
    const [value, setValue] = React.useState('Women')
    return (
        <div style={{background:"#edededc6"}}>
        <Box display="flex" width="70%" justifyContent="space-evenly" margin="auto" >
            <Box textAlign="center">
                <Text fontWeight="bold"> NEW TO YOOX</Text>
                <Text fontSize="12px" marginTop="7" >Shopping guide</Text>
                <Text fontSize="12px" marginTop="3">iPhone/iPad/Android</Text>
                <Text fontSize="12px" marginTop="3">Browse all 
                <br/>designers</Text>
                <Text marginTop="3"fontSize="12px">Browse all 
                    <br/>
                Categories</Text>
            </Box>
            <Box textAlign="center">
                <Text fontWeight="bold">HELP</Text>
                <Text fontSize="12px" marginTop="7">Shopping times &
                    <br/>
                    costs
                </Text>
                <Text fontSize="12px" marginTop="3">Payment and web 
                    <br/>
                    security
                </Text>
                <Text fontSize="12px" marginTop="3">Product Quality</Text>
                <Text fontSize="12px" marginTop="3">Track your order</Text>
                <Text fontSize="12px" marginTop="3">Returns & Refunds</Text>
                <Text fontSize="12px" marginTop="3">FAQs</Text>
                <Text fontSize="12px" marginTop="3">Size Guide</Text>
            </Box>
            <Box textAlign="center" padding="25px" bg="white" > 
                    <EmailIcon/>
                    <br/>
                    <Text fontFamily="Montserrat,sans-serif" fontWeight="bold">YOOX NEWS</Text>
                    <Text fontFamily="Montserrat,sans-serif" fontSize="14px" marginTop="3">Sign up for the newsletter </Text>
                    <Text fontFamily="Montserrat,sans-serif" fontSize="14px">and discover the latest arrivals and </Text>
                    <Text fontFamily="Montserrat,sans-serif" fontSize="14px">promotions </Text>
                    <Input fontSize="13px" marginTop="3"  textAlign="center" placeholder='INSERT YOUR E-MAIL ADDRESS' height="53px" background="gray.100" borderRadius="none"/>
                    <Box margin="auto" marginTop="3" padding="3">
                        <RadioGroup colorScheme="gray" display="flex" justifyContent="space-between" onChange={setValue} value={value}>
                            <Radio value='Women'>Woman</Radio>
                            <Radio value='Men'>Man</Radio>
                        </RadioGroup>
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop="3"alignItems="center" gap="5px">
                        <Checkbox width="21px" height="20px" border="4px solid grey"></Checkbox>
                        <Box fontSize="12px" color="gray.500">
                            <i>
                            <Text>I consent to receive YOOX</Text>
                            <Text> newsletters via email, for further</Text>
                            <Text> information please consult the</Text>
                            <Text fontWeight="bold" textDecoration="underline"> Privacy Policy</Text>
                            </i>
                            </Box>
                    </Box>
                    <Button bg="black" color="white" borderRadius="none" fontFamily="Montserrat,sans-serif" marginTop="3" fontSize="12px" width="100%" height="45px">
                        SIGN UP
                    </Button>
            </Box>
            <Box textAlign="center">
                <Text fontWeight="bold">MYOOX</Text>
                <Text marginTop="7" fontSize="12px" >Login</Text>
                <Text marginTop="3" fontSize="12px" >My Orders</Text>
                <Text marginTop="3" fontSize="12px" >My Details</Text>
                <Text marginTop="3" fontSize="12px" >Dream Box</Text>
                <Text marginTop="3" fontSize="12px" >Premier</Text>
            </Box>
            <Box textAlign="center">
                <Text fontWeight="bold">ABOUT US</Text>
                <Text fontSize="12px" marginTop="7">Comapy Info</Text>
                <Text fontSize="12px" marginTop="3">Press</Text>
                <Text fontSize="12px" marginTop="3">Affiliation</Text>
                <Text fontSize="12px" marginTop="3">Careers</Text>
            </Box>
        </Box>
        <br/>
            <Box>
                <Box>
                    <Text>CONNECT WITH US</Text>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaYoutube/>
                    <FaPinterest/>
                    <FaTiktok/>
                </Box>
            </Box>
        </div>
    )
}
export default Footer;