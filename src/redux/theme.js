import { createSlice } from "@reduxjs/toolkit";

const themeLayout = createSlice({
  name: "themeLayout",
  initialState: {
    darkTheme: false,
  },

  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("darkTheme", state.darkTheme);
      const html = document.querySelector("html");
      !state.darkTheme
        ? html.classList.remove("dark")
        : html.classList.add("dark");
    },
  },
});

export const { toggleTheme } = themeLayout.actions;
export default themeLayout.reducer;
