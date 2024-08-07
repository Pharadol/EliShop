import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "@/model/Cart";
import { Product } from "@/model/Product";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartProduct[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      const isLogin = localStorage.getItem("currentUser");

      if (itemExists && isLogin) {
        itemExists.quantity++;
        toast.success("Successfully added to cart.");
      } else if (!itemExists && isLogin) {
        state.push({ ...action.payload, quantity: 1 });
        toast.success("Successfully added to cart.");
      } else if (!isLogin) {
        toast.error("Please log in to add items to your cart.", {position: "top-center"});
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
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      toast.success("Successfully removed from cart.");
    },
    clearCart: () => {
      return [];
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
