import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

export const store = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
      authSlice: authSlice,
      cartSlice: cartSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
