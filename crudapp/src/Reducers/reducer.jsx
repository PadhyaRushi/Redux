import { PostAPIDetails } from "../Action";
// import { Dispatch } from "react-redux";

const IntialData = {
    details: [],
    isResponse: false,
    isDelete: false
}
const reducer = (state = IntialData, action) => {
    switch (action.type) {
        case 'GETDETAILS':
            return {
                details: action.paylod
            }
        case 'POSTDETAILS':
            return {
                isResponse: action.paylod
            }
        case 'DELETEDETAILS':
            return {
                isResponse: action.paylod
            }
        default: return state;
    }
    
}


export default reducer;