import { createSlice } from "@reduxjs/toolkit";
import { productListAsync } from "./productListService";
const initialState = {
    items: [],
    error: null,
    status: "idle",
  };
  export const productListSlice = createSlice({
    name: "productListSlice",
    initialState,
    reducers: {},
    extraReducers: {
    
      [productListAsync.pending]: (state, action) => {
        state.status = "loading";
      },
      [productListAsync.fulfilled]: (state, action) => {
        state.items.push(action.payload);
        state.status = "succeeded";
      },
      [productListAsync.rejected]: (state, action) => {
        state.status = "failed";
        state.error = action.error;     
      },
      
    },
  });
  export const productsSelector = (state) => state.productListSlice.items;
  export default productListSlice.reducer;