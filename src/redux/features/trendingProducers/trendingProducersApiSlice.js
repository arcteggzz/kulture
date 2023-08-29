import { apiSlice } from "../../app/api/apiSlice";
import  apiRoutePaths  from "../../../utils/apiRoutePaths";

export const trendingProducersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTrendingProducers: builder.query({
      query: () => `${apiRoutePaths.trendingProducers}`,
    }),
    getSingleTrendingProducer: builder.query({
      query: (trendingProducerId) => `${apiRoutePaths.trendingProducers}/${trendingProducerId}`,
    }),
  }),
});

export const { useGetAllTrendingProducersQuery, useGetSingleTrendingProducerQuery } =
  trendingProducersApiSlice;
