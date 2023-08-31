import { apiSlice } from "../../app/api/apiSlice";
import  apiRoutePaths  from "../../../utils/apiRoutePaths";

export const beatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBeats: builder.query({
      query: () => `${apiRoutePaths.beats}`,
    }),
    getSingleBeat: builder.query({
      query: (beatsId) => `${apiRoutePaths.beats}/${beatsId}`,
    }),
  }),
});

export const { useGetAllBeatsQuery, useGetSingleBeatsQuery } =
  beatsApiSlice;
