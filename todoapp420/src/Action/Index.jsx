export const AddTodo=(data)=>{
    return {
        type:"ADDTODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const DeleteTodo=(id)=>{
    return {
        type:"DELETETODO",
        id:id,
      
    }
}