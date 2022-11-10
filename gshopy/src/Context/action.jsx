export const LoginLoadingAction=()=>{
    return {
        type:"Login-Loading"
    }
}
export const LoginSuccessAction=(token)=>{
    return {
        type:"Login-Success",
        token:token
    }
}
export const LoginFailureAction=()=>{
    return {
        type:"Login-Failure"
    }
}