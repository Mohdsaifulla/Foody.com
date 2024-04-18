import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "user",
  initialState:null,
  reducers: {
    addUserInfo: (state, action) => {
        return action.payload
    },
  },
});
export const { addUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
