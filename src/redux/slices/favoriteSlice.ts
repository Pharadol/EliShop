import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/model/Product";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as Product[],
  reducers: {
    addToFavorite: (state, action: PayloadAction<Product>) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addToFavorite, removeFromFavorite, clear } = favoriteSlice.actions;
export default favoriteSlice.reducer;
