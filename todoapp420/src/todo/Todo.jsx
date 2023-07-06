import React, { useState } from 'react';
import { AddTodo,DeleteTodo } from '../Action/Index';
import {useDispatch,useSelector} from "react-redux"

function Todo(props) {
    const[inputvalue,setinputvalue]=useState("")
    const dispatch=useDispatch()
    const list=useSelector((state)=>state.listdata.list)
    console.log(list);
    return (
        
      <>
      <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <input type="text" className='form-control' value={inputvalue}  onChange={(event)=>setinputvalue(event.target.value)}/>
                <br /><br />
                <button className='btn btn-primary' onClick={()=>dispatch
                (AddTodo (inputvalue),setinputvalue(""))}> Add task</button>
                {
                    list.map((res)=>{
                        console.log(res);
                        return(
                            <div className='d-flex mt-3'>
                                <h5 className='mx-2'>{res.data}</h5>
                                <button className='btn btn-success' onClick={()=>dispatch(DeleteTodo(res.id))}> Delete Task</button>
                                <br /> <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>

      </div>
      </>
    );
}

export default Todo;