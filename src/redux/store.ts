import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
      authSlice: authSlice,
      cartSlice: cartSlice,
      favoriteSlice: favoriteSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
