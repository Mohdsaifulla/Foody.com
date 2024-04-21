import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInfoSlice";
import cartReducer from "./cartSlice";
import themeReducer from"./themeSlice"
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    theme:themeReducer,
  },
});

export default appStore;
