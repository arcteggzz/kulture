import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  accessToken: null,
  userImage: null,
  userId: null,
  userEmail: null,
  firstName: null,
  lastName: null,
  userType: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {
        userName,
        accessToken,
        userImage,
        userId,
        userEmail,
        firstName,
        lastName,
        userType,
      } = action.payload;
      state.userName = userName;
      state.accessToken = accessToken;
      state.userImage = userImage;
      state.userId = userId;
      state.userEmail = userEmail;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userType = userType;
    },
    resetCredentials: (state) => {
      state.userName = null;
      state.accessToken = null;
      state.userImage = null;
      state.userId = null;
      state.userEmail = null;
      state.firstName = null;
      state.lastName = null;
      state.userType = null;
    },
  },
});
export const { setCredentials, resetCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserName = (state) => state.auth.userName;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentUserImage = (state) => state.auth.userImage;
export const selectCurrentUserId = (state) => state.auth.userId;
export const selectCurrentUserEmail = (state) => state.auth.userEmail;
export const selectCurrentUserFirstName = (state) => state.auth.firstName;
export const selectCurrentUserLastName = (state) => state.auth.lastName;
export const selectCurrentUserType = (state) => state.auth.userType;

