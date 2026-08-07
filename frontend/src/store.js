import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./store/features/users/usersSlice.js";

export const store = configureStore({
  reducer: {
    users: usersSlice(),
  },
});
