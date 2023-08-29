import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModalIsOpen: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModalIsOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginModalIsOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;

export const selectloginModalIsOpen = (state) =>
  state.loginModal.loginModalIsOpen;
