import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const chatSlice = createSlice({
  name: "ChatMsg",
  initialState: {
    msgtube: [],
  },

  reducers: {
    addMsg: (state, action) => {
      state?.msgtube.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;

export let { addMsg } = chatSlice.actions;
