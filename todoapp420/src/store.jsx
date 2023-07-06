import {combineReducers, createStore} from "redux";
import reducers from "./Reducers/Reducer";
const store=createStore(combineReducers({
    listdata:reducers
}))
export default store;