import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itemsApi } from "../features/items/services/items.service";
import { itemsSlice } from "../features/items/slices/items.slice";
import { searchSlice } from "../features/search-box/slices/search.slice";

export const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
    [itemsSlice.name]: itemsSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
