import { configureStore } from "@reduxjs/toolkit";
import catalogSite from "../redux/catalog-site";
import user from "../redux/user";

export const store = configureStore({
  reducer: {
    catalogSite,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
