import { DeleteAPIDetails, GetAPIDetails } from "../CRUD/API";
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
//post data

export const PostAPIDetails=(request)=>{
    return function(dispatch)
    {
        return PostAPIDetails(request).then((res=>{
             console.log("Response from post data..",res);
             dispatch({
                type:'POSTDETAILS',
                paylod:''
             })
        }))
    }
}

// delete data

export const DeleteAPIAction=(id)=>{
    return function(dispatch)
    {
        return DeleteAPIDetails(id).then((res=>{
             console.log("Response from delete data..",res);
             dispatch({
                type:'DELETEDETAILS',
                paylod:''
             })
        }))
    }
}

