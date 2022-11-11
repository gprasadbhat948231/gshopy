import { Text } from "@chakra-ui/react";
import {Box} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function AdminNav()
{
    return(
        <Box fontWeight="700" marginBottom="10px"display="flex" justifyContent="space-around" background="blackAlpha.200" padding="2">
            <NavLink to="/adminmenpage"><Text>Men</Text></NavLink>
            <NavLink to="/adminwomen"><Text>Women</Text></NavLink>
            <NavLink to="/addproduct"><Text>AddItem</Text></NavLink>
            <Text>Welcome to Admin Panel :- Guru</Text>
        </Box>
    )
}
export default AdminNav;