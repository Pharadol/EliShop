import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import filterSlice from "./slices/filterSlice";

export const store = () => {
  return configureStore({
    reducer: {filterSlice, products: productsSlice},
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']