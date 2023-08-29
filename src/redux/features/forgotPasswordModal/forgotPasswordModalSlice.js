import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forgotPasswordModalIsOpen: false,
};

const forgotPasswordModalSlice = createSlice({
  name: "forgotPasswordModal",
  initialState,
  reducers: {
    openForgotPasswordModal: (state) => {
      state.forgotPasswordModalIsOpen = true;
    },
    closeForgotPasswordModal: (state) => {
      state.forgotPasswordModalIsOpen = false;
    },
  },
});

export const { openForgotPasswordModal, closeForgotPasswordModal } = forgotPasswordModalSlice.actions;

export default forgotPasswordModalSlice.reducer;

export const selectForgotPasswordModalIsOpen = (state) =>
  state.forgotPasswordModal.forgotPasswordModalIsOpen;
