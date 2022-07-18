import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authData: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    authStart(state) {
      state.isFetching = true;
      state.isError = false;
    },
    authSuccess(state, action) {
      state.authData = action.payload;
      state.isFetching = false;
    },
    authLogout(state) {
      state.authData = null;
      state.isFetching = false;
    },
    authFailure(state, action) {
      state.isError = true;
      state.isFetching = false;
    },
  },
});

export const { authStart, authSuccess, authFailure, authLogout } =
  userSlice.actions;
export default userSlice.reducer;
