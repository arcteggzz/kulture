import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    image: "",
    beatName: "ppp",
    beatLicense: "ppp",
    beatId: "kknjnjn",
    beatPrice: "900",
    availableCopies: "9",
    userOwnerId: "080780",
    totalSales: "9",
    beatSize: "90088",
  },
  {
    image: "",
    beatName: "mmm",
    beatLicense: "ppp",
    beatId: "mmm",
    beatPrice: "900",
    availableCopies: "9",
    userOwnerId: "080780",
    totalSales: "9",
    beatSize: "90088",
  },
];

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((cartItem) => cartItem.beatId !== action.payload.id);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// export const selectCurrentUserName = (state) => state.auth.userName;
