import { GetAPIDetails } from "../CRUD/API";
export const GetAPIAction=()=>{
    return function(dispatch){
        return GetAPIDetails().then((res)=>{
            console.log(res,"from action");
            dispatch({
                type:'GETDETAILS',
                paylod:res.data
            })
        })
    }
}