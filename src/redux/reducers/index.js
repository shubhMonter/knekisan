import {combineReducers} from "redux"
import authReducer from './authReducer'
import productReducer from './productReducer'
import errorReducer from './errorReducer';
import enquiryReducer from "./enquiryReducer"
export default combineReducers({
    auth:authReducer,
    products:productReducer,
    enquiry:enquiryReducer,
    errors: errorReducer,
})