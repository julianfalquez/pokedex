import { userInterface } from "./../../interfaces/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: userInterface = {
  displayName: undefined,
  email: undefined,
  photoURL: undefined,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.isLoggedIn = true;
    },
    logOutUser(state) {
      state.displayName = undefined;
      state.email = undefined;
      state.photoURL = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser,logOutUser } = userSlice.actions;
export default userSlice.reducer;
