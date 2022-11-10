import {Routes,Route} from "react-router-dom";
import Womens from "./Womens";
import Register from "./Registration";
import WomensProduct from "./womenproducts";
import MensProducts from "./menproducts";
import Cart from "./Cart";
import PrivateRoute from "../Context/privateRoute";
function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Womens/>} ></Route>
            <Route path="/mens"   element={<PrivateRoute><MensProducts/></PrivateRoute>}></Route>
            <Route path="/Registration"   element={<Register/>}></Route>
            <Route path="/womenclothing"   element={<WomensProduct/>}></Route>
            <Route path="/cart"   element={<Cart/>}></Route>
        </Routes>
    )
}
export default AllRoutes;