import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInterface {
  modalLogin: boolean;
}

// Սկզբնական state
const initialState: IInterface = {
  modalLogin: false,
};

// Ստեղծել slice
export const modalsSite = createSlice({
  name: "modals",
  initialState,
  reducers: {
    serOpenCloseModalLogin: (state, action: PayloadAction<boolean>) => {
      state.modalLogin = action.payload;
    },
  },
});

// Export actions և reducer
export const { serOpenCloseModalLogin } = modalsSite.actions;
export default modalsSite.reducer;
