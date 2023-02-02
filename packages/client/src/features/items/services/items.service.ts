/**
 * @example
 * const { data, error, isLoading } = useGetItemsQuery("iphone");
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ItemResult, ItemsResult } from "../../../types";

/**
 * @example
 * VITE_SERVER_URL = "" // It allows the use of a proxy such as nginx
 * VITE_SERVER_URL = "http://server_api:3000" // It allows to use a different docker container
 */
const SERVER_URL = import.meta.env.VITE_SERVER_URL ?? "http://localhost:3000";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER_URL}/api` }),
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
