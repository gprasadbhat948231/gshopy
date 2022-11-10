const reducer=(state,action)=>{
    switch(action.type)
    {
        case "Login-Loading":
            {
            return{
                isLoading:true,
                isAuth:false,
                token:"",
                isError:false
                }
            }
        case "Login-Success":
            {
            return{
                isLoading:false,
                isAuth:true,
                token:action.payload,
                isError:false
                }
            }
        case "Login-Failure":
            {
            return{
                isLoading:false,
                isAuth:false,
                token:"",
                isError:true
                }
            }
        default:
            {
                return state;
            }
    }
}
export default reducer;