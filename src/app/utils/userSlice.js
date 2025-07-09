const { createSlice } = require("@reduxjs/toolkit");

const savedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;

const initialState = savedUser
  ? JSON.parse(savedUser)
  : {
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
    };
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
