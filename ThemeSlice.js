import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const ThemeSlice = createSlice({
  name: "Theme",
  initialState: {
    Now: "Light",
  },

  reducers: {
    ChangeTheme: (state) => {
      state.Now == "Light" ? (state.Now = "Dark") : (state.Now = "Light");
    },
  },
});

export default ThemeSlice.reducer;

export const { ChangeTheme } = ThemeSlice.actions;
