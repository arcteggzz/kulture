import { apiSlice } from "../../app/api/apiSlice";

export const signUpApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
        query: (userObject) => ({
          url: "/register",
          method: "POST",
          body: userObject,
        }),
      }),
  }),
});
export const { useRegisterMutation, } = signUpApiSlice;
