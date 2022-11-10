import React,{useContext} from "react";
import { AuthContext } from "./authContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=>{
    let {state}=useContext(AuthContext);
    if(!state.isAuth)
    {
        return <Navigate to="/Registration"/>
    }
    return children
}
export default PrivateRoute;