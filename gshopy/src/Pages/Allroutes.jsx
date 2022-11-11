import {Routes,Route} from "react-router-dom";
import Womens from "./Womens";
import Register from "./Registration";
import WomensProduct from "./womenproducts";
import MensProducts from "./menproducts";
import Cart from "./Cart";
import PrivateRoute from "../Context/privateRoute";
import Admin from "../Admin/AdminPage";
import Men from "../Admin/Men";
import Women from "../Admin/Women";
import Payment from "./Payment";
import AddItem from "../Admin/Additem";
function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Womens/>} ></Route>
            <Route path="/mens"   element={<PrivateRoute><MensProducts/></PrivateRoute>}></Route>
            <Route path="/Registration"   element={<Register/>}></Route>
            <Route path="/womenclothing"   element={<WomensProduct/>}></Route>
            <Route path="/cart"   element={<Cart/>}></Route>
            <Route path="/adminpage" element={<Admin/>}></Route>
            <Route path="/adminmenpage" element={<Men/>}></Route>
            <Route path="/adminwomen" element={<Women/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/addproduct" element={<AddItem/>}></Route>
        </Routes>
    )
}
export default AllRoutes;