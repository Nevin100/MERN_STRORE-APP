import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const createSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const exitingItem = state.cartitems.find(
        (item) => item._id === action.payload._id
      );
    },
  },
});
