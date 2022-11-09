import {Routes,Route} from "react-router-dom";
import Womens from "./Womens";
import Mens from "./Mens";
function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Womens/>} ></Route>
            <Route path="/mens"   element={<Mens/>}></Route>
        </Routes>
    )
}
export default AllRoutes;