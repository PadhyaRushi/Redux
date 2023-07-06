import React, { useEffect } from 'react';
// import {Get}
import {GetAPIAction} from '../Action/index'
import {useDispatch,useSelector} from 'react-redux'

function Home(props) {
  const dispatch=useDispatch()
  const Result= useSelector((state)=>state.reducer.details)
  useEffect(()=>{
    dispatch(GetAPIAction())
  })
  console.log(Result);
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
                </table>
                <tbody>
                  {Result.map((res)=>{
                      return(
                        <tr>
                          <td>{res.id}</td>
                          <td>{res.name}</td>
                          <td>{res.email}</td>
                          <td>{res.mobile}</td>
                          <td>{res.country}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
            </div>
        </div>
      </div>
      </>
    );
}

export default Home;