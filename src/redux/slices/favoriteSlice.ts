import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/model/Product";
import { toast } from "react-hot-toast";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as Product[],
  reducers: {
    addToFavorite: (state, action: PayloadAction<Product>) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
        toast.success("Successfully added to favorites.");
      } else {
        toast.success("This item is already in your favorites.");
      }
    },
    removeFromFavorite: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      toast.success("Successfully removed from favorites.");
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
