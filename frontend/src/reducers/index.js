// This index.js file is for combining the reducer,incase there are large number of reducer in the project 
import todoReducer from "./todoReducer";
import reduxReactFormReducer from "./ReduxReactFormReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    todoReducer,
    reduxReactFormReducer
})

export default rootReducer;