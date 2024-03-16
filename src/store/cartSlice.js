import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state) => {
      state.item.pop;
    },
    clearCart: (state) => {
      state.item.length = 0;
    },
    increaseItem: (state, action) => {
      const itemId = action.payload.card.info.id;
      const foundItem = state.item.find((item) => item.card.info.id === itemId);
      if (foundItem) {
        foundItem.quantity ++;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
