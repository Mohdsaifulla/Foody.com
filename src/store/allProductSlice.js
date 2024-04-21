import { createSlice } from "@reduxjs/toolkit";
const allProductSlice=createSlice({
    name:"products",
    initialState:{
        allProducts:null,
    },
    reducers:{
        addAllProducts:(state,action)=>{
            state.allProducts=action.payload
        }
    }
})
export const {addAllProducts}=allProductSlice.actions
export default allProductSlice.reducer