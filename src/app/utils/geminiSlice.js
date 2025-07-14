import reducer from "./userSlice";

const { createSlice } = require("@reduxjs/toolkit");

const geminiAIstore = createSlice({
  name: "geminiAI",
  initialState: { initalState: false },
  reducers: {
    toggleAibutton: (state, action) => {
      state.initalState = !state.initalState;
    },
  },
});

export const { toggleAibutton } = geminiAIstore.actions;
export default geminiAIstore.reducer;
