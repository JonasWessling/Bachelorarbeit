import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./store/features/auth/authSlice.js";
import usersSlice from "./store/features/users/usersSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
  },
});
