const IntialData={
    details:[]
}
const reducer=(state= IntialData,action)=>{
    switch(action.type){
        case 'GETDETAILS':
            return{
                details:action.paylod
            }
            default:return state;
    }
}
export default reducer;