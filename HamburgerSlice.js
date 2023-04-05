import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const HamburgerSlice = createSlice({
  name: "Hamburger",
  initialState: {
    show: true,
  },
  reducers: {
    ToogleSlidebar: (state) => {
      state.show = !state.show;
      // console.log("kkk")
      console.log(state.show);
    },
  },
});

export default HamburgerSlice.reducer;

export const { ToogleSlidebar } = HamburgerSlice.actions;
