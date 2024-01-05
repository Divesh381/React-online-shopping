import { combineReducers } from "@reduxjs/toolkit";
import { productListReducers } from "../reducers/productReducers";
const rootReducer= combineReducers({    
    productListReducers :productListReducers 
 });

export default rootReducer;