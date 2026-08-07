import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, userName: "John Doe", email: "john@example.com" },
  { id: 2, userName: "Jane Smith", email: "jane@example.com" },
  { id: 3, userName: "Bob Johnson", email: "bob@example.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state) =>
  state.users.find((user) => user.id === state.id);
