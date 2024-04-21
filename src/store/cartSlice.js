import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingitem = state.item.find(
        (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
      );
      if (existingitem) {
        existingitem.quantity += action.payload.quantity;
      } else {
        state.item.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.item = state.item.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
    },
    clearCart: (state) => {
      state.item.length = 0;
    },
    increaseItem: (state, action) => {
      const itemId = action.payload.card.info.id;
      const foundItem = state.item.find(
        (item) => item?.card?.info?.id === itemId
      );
      if (foundItem) {
        foundItem.quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload.card.info.id;
      const foundItem = state.item.find(
        (item) => item?.card?.info?.id === itemId
      );
      if (foundItem) {
        if (foundItem.quantity === 1) {
          foundItem.quantity = 1;
        } else {
          foundItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
