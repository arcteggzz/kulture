import { apiSlice } from "../../app/api/apiSlice";
import  apiRoutePaths  from "../../../utils/apiRoutePaths";

export const producersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducers: builder.query({
      query: () => `${apiRoutePaths.producers}`,
    }),
    getSingleProducer: builder.query({
      query: (producerId) => apiRoutePaths.producersDetails(producerId),
    }),
    
  }),
});

export const { useGetAllProducersQuery, useGetSingleProducerQuery } =
  producersApiSlice;
