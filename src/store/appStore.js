import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInfoSlice";
import cartReducer from "./cartSlice";
import themeReducer from"./themeSlice"
import allProductReducer from "./allProductSlice"
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    theme:themeReducer,
    products:allProductReducer,
  },
});

export default appStore;
