/**
 * @example
 * const { data, error, isLoading } = useGetItemsQuery("iphone");
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ItemResult, ItemsResult } from "../../../types";

const PREFIX = import.meta.env.VITE_SERVER_PREFIX ?? "/api";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: PREFIX }),
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
