import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import mobileNavReducer from "../features/mobileNav/mobileNavSlice";
import loginModalReducer from "../features/loginModal/loginModalSlice";
import forgotPasswordModalReducer from "../features/forgotPasswordModal/forgotPasswordModalSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    mobileNav: mobileNavReducer,
    loginModal: loginModalReducer,
    forgotPasswordModal: forgotPasswordModalReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
