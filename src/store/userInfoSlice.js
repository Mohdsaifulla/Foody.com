import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
export const { addUserInfo, removeUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
