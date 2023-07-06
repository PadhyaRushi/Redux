import React, { useEffect } from 'react';
// import {Get}
import { GetAPIAction,DeleteAPIAction } from '../Action/index'
import { useDispatch, useSelector } from 'react-redux'
import {
  
  Link,
} from "react-router-dom";

function Home(props) {
  const dispatch = useDispatch()
  const Result = useSelector((state) => state.reducer.details)
  const isDelete = useSelector((state) => state.reducer.isDelete)

  useEffect(() => {
    dispatch(GetAPIAction())
  })
  console.log(Result);

  const MyData = Result ? Result.map((res) => {
    return <>
      <tr>
        <td>{res.id}</td>
        <td>{res.name}</td>
        <td>{res.email}</td>
        <td>{res.mobile}</td>
        <td>{res.country}</td>
        <td><button className='btn btn-danger' onClick={()=>dispatch(DeleteAPIAction(res.id))}>Delete</button>
      <Link><button className='btn btn-success' to={'/update'}>Update</button></Link> 
        </td>
      </tr>
    </>
  }) : null

  return (
    <>
      <div className="conatiner mt-5">
        <div className="row text-center">
          <h1 className='text-danger'>Welcome to redux crud app</h1>
          <div className="col">
            <table className='table mt-5'>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Country</th>
              <th>Action</th>
           
            <tbody>
              {MyData}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;