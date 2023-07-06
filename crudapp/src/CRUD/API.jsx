import axios from "axios";
export async function AxiosREquest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    })
}
const GetAPIDetails=()=>{
   const headers={
        'Content-Type':'application/json'
    }
    return  AxiosREquest('http://localhost:3000/details','GET',headers,{})
}
//submit data

const PostAPIDetails=(data)=>{
    return axios.post('http://localhost:3000/details',data);
}

//delete data

const DeleteAPIDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return  AxiosREquest('http://localhost:3000/details'+id,'DELETE',headers,{})
}
export {GetAPIDetails,PostAPIDetails,DeleteAPIDetails}