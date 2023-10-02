import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import mobileNavReducer from "../features/mobileNav/mobileNavSlice";
import loginModalReducer from "../features/loginModal/loginModalSlice";
import forgotPasswordModalReducer from "../features/forgotPasswordModal/forgotPasswordModalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  //not sure about this white thing. It might not be doing anything in this code.
  whiteList: ["authReducer"],
  //not sure about this blacklist thing. It might not be doing anything in this code.
  blacklist: [apiSlice.reducer],
};

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  mobileNav: mobileNavReducer,
  loginModal: loginModalReducer,
  forgotPasswordModal: forgotPasswordModalReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
