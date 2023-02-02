import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ItemsState {
  categories: string[];
}

const initialState: ItemsState = {
  categories: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
    },
  },
});

export const { addCategories } = itemsSlice.actions;

export default itemsSlice.reducer;
