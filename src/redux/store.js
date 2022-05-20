import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./Products/productListSlice";


export const store = configureStore({
  reducer: {
   
    productListSlice : productListSlice,
    
  },
});