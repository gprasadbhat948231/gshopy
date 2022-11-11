import AdminNav from "./AdminNav";
import {Input,Button, Select} from "@chakra-ui/react"
import './additem.css'
function AddItem()
{
    return(
        <div>
            <AdminNav/>
            <div className="additemdiv">
                <Input placeholder="Enter image url"/>
                <Select placeholder="Select Category">
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </Select>
                <Input placeholder="Enter brand"/>
                <Input placeholder="Enter title"/>
                <Input type="number" placeholder="Enter price"/>
                <Input type="number" placeholder="Enter original price"/>
                <Input type="number" placeholder="Enter offer_price"/>
                <Input placeholder="Enter discount"/>
                <Button>Add Item</Button>
            </div>
        </div>
    )
}
export default AddItem;