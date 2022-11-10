import {
    FormControl,
    Input,
    Text,
    Button,
  } from '@chakra-ui/react';
  import "./Registration.css";
  import axios from "axios";
  import { AuthContext } from '../Context/authContextProvider';
  import {LoginSuccessAction,LoginFailureAction,LoginLoadingAction} from "../Context/action"
    import { useContext,useState } from 'react';
    import { Navigate } from 'react-router-dom';
function Register()
{
    const {state,dispatch}=useContext(AuthContext);
    const [logindet,setLoginDet]=useState({email:"",password:"",firstname:""});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setLoginDet({...logindet,[name]:value})
    }
    const handleLogin=()=>{
        dispatch(LoginLoadingAction());
        axios.post('https://reqres.in/api/login',{
            email:logindet.email,
            password:logindet.password
        })
        .then((res)=>{
            dispatch(LoginSuccessAction(logindet.firstname))
        })
        .catch(()=>{
            dispatch(LoginFailureAction());
        })
    }
    if(state.isAuth)
    {
        return <Navigate to="/"/>
    }
    return(
        <div>
            <div className="RegistrationForm">
            <br/>
            <Text fontSize="18px" fontWeight="bold">Login with your E-mail</Text>
            <br/> 
            <FormControl >
                <Input type='text' isRequired placeholder='FIRST NAME*' name="firstname" onChange={handleChange} background="#f0f8ff"/>
                <br/>
                <br/>
                <Input type='text' isRequired placeholder='LAST NAME*'background="#f0f8ff"/>
                <br/>
                <br/>
                <Input type='email' name="email" value={logindet.email} onChange={handleChange} isRequired placeholder='EMAIL NAME*'background="#f0f8ff"/>
                <br/>
                <br/>
                <Input type='password'  name="password" value={logindet.password} onChange={handleChange} isRequired placeholder='PASSWORD NAME*' background="#f0f8ff"/>
                <br/>
                <br/>
                <Input type='Number' isRequired placeholder='PHONE NAME*' background="#f0f8ff"/>
                <br/>
                <br/>
                <Button background="#333" color="white" borderRadius="none"width="100%" onClick={handleLogin} isLoading={state.isLoading}>Registration</Button>
                <br/>
                <br/>
            </FormControl>
            </div>
        </div>
    )
}
export default Register;