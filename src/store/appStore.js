import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInfoSlice";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
