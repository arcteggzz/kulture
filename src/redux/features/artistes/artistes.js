import { apiSlice } from "../../app/api/apiSlice";
import apiRoutePaths from "../../../utils/apiRoutePaths";

export const artistesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllArtistes: builder.query({
      query: () => `${apiRoutePaths.artistes}`,
    }),
    getSingleArtistes: builder.query({
      query: (artistesId) => `${apiRoutePaths.artistes}/${artistesId}`,
    }),
  }),
});

export const { useGetAllArtistesQuery, useGetSingleArtistesQuery } =
  artistesApiSlice;
