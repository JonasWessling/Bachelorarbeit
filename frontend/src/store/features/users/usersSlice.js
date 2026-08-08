import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    username: "John Doe",
    email: "john@example.com",
    password: "password123",
  },
  {
    id: nanoid(),
    username: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
  },
  {
    id: nanoid(),
    username: "Bob Johnson",
    email: "bob@example.com",
    password: "password789",
  },
  {
    id: nanoid(),
    username: "Admin",
    email: "admin@email.com",
    password: "admin",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare(username, email, password) {
        return {
          payload: {
            id: nanoid(),
            username,
            email,
            password,
          },
        };
      },
    },
  },
});

export default userSlice.reducer;

export const { addUser } = userSlice.actions;

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state) =>
  state.users.find((user) => user.id === state.id);
