import { configureStore } from "@reduxjs/toolkit";
import catalogSite from "../redux/catalog-site";

export const store = configureStore({
  reducer: {
    catalogSite,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
