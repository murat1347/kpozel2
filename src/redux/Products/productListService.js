import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productListAsync = createAsyncThunk(
  "productListSlice/productListAsync",
  async (CategoryId) => {
    const response = await axios.get(
      `http://localhost:4988/api/Product`,{params:{CategoryId:1,PAGE_SIZE:10}}
    );
    console.log(response);
    return response.data;
    
  }
);
