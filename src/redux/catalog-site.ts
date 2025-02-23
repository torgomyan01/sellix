import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Սահմանել state-ի տիպը
interface CatalogState {
  status: boolean;
}

// Սկզբնական state
const initialState: CatalogState = {
  status: false,
};

// Ստեղծել slice
export const catalogSite = createSlice({
  name: "catalog-site",
  initialState,
  reducers: {
    // openClose reducer
    openClose: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload; // Օգտագործել action.payload
    },
  },
});

// Export actions և reducer
export const { openClose } = catalogSite.actions;
export default catalogSite.reducer;
