import { apiSlice } from "../../app/api/apiSlice";
import  apiRoutePaths  from "../../../utils/apiRoutePaths";

export const trendingCategoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTrendingCategories: builder.query({
      query: () => `${apiRoutePaths.trendingBeats}`,
    }),
    getSingleTrendingCategory: builder.query({
      query: (trendingBeatId) => `${apiRoutePaths.trendingBeats}/${trendingBeatId}`,
    }),
  }),
});

export const { useGetAllTrendingCategoriesQuery, useGetSingleTrendingCategoryQuery } =
  trendingCategoriesApiSlice;
