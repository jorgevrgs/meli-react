/**
 * @example
 * const { data, error, isLoading } = useGetItemsQuery("iphone");
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ItemResult, ItemsResult } from "../../../types";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getItems: builder.query<ItemsResult, string | undefined>({
      query: (query?: string) => `items${query ? `?q=${query}` : ""}`,
    }),
    getItem: builder.query<ItemResult, string>({
      query: (id: string) => `items/${id}`,
    }),
  }),
});

export const { useGetItemsQuery, useGetItemQuery } = itemsApi;
