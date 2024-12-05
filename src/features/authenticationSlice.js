import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

const authenticationReducer = authenticationSlice.reducer;

export default authenticationReducer;
