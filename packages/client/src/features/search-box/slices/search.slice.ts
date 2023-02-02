import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchBy: string;
}

const initialState: SearchState = {
  searchBy: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.searchBy = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
