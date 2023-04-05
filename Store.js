import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import HamburgerSlice from "./HamburgerSlice";
import ThemeSlice from "./ThemeSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    Hamburger: HamburgerSlice,

    Theme: ThemeSlice,

    ChatMsg: chatSlice,
  },
});

export default store;
