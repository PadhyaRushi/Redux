import React, { useState } from 'react';

function Todo(props) {
    const [input, setinput] = useState("");
    const [listdata, setlistdata] = useState([]);


    const AddTodo = () => {
        setlistdata((e) => {
            const getdata = [...listdata, input];
            console.log(getdata);
            setinput("");
            return getdata;
        })

    }
    const delbtn=(i)=>{

        const abc =  listdata.filter((ele,id)=>{
          
             // console.log(id);
             return i!=id;
 
          })
          setlistdata(abc);
      
      }
      const delallbtn=()=>{
       setlistdata([]);
      }

    return (
        <>
            <div className="todo-box">
                
                <div className="todo">
                   
                    <div className="todo-img">
                        <img src="./img/new.webp" alt="img" />
                    </div>
                    <hr />
                    <input type="text" placeholder='Enter Activity...' value={input} onChange={(e) => setinput(e.target.value)} />
                    <button onClick={AddTodo}>Add</button>

                    {
                        listdata.map((res,i) => {
                            return (
                                <>
                                    <div className="arr-data" key={i}>
                                        <h3>{res}</h3>
                                        <button className='delete' onClick={() => delbtn(i)}>Delete</button>
                                    </div>
                                </>

                            )


                        })
                    }
                    {
                        listdata.length>=1?<button className='delete1' onClick={delallbtn}>Delete All</button>:null
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Todo;