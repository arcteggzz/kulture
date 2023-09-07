import { apiSlice } from "../../app/api/apiSlice";
import apiRoutePaths from "../../../utils/apiRoutePaths";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (beatId) => ({
        url: `/carts/add/${beatId}`,
        method: "POST",
      }),
    }),
    getAllCartItems: builder.query({
      query: () => apiRoutePaths.cart.getAllCartItems,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useAddToCartMutation, useGetAllCartItemsQuery } = cartApiSlice;
