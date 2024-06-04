import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "@/model/Cart";
import { Product } from "@/model/Product";

const cartSlice = createSlice({
  name: "followCart",
  initialState: [] as CartProduct[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          const index = state.findIndex((item) => item.id === action.payload);
          state.splice(index, 1);
        } else {
          item.quantity--;
        }
      }
    },
    clearCart: (state) => {
      return [];
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
