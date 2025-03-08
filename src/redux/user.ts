import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserInfo {
  id: number;
  name: string;
  phone_number: string;
}
// Սահմանել state-ի տիպը
interface User {
  userInfo: IUserInfo | null;
}

// Սկզբնական state
const initialState: User = {
  userInfo: null,
};

// Ստեղծել slice
export const catalogSite = createSlice({
  name: "user-state",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserInfo | null>) => {
      state.userInfo = action.payload;
    },
  },
});

// Export actions և reducer
export const { setUserInfo } = catalogSite.actions;
export default catalogSite.reducer;
