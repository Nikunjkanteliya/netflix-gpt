import reducer from "./userSlice";

const { createSlice } = require("@reduxjs/toolkit");

const geminiAIstore = createSlice({
  name: "geminiAI",
  initialState: {
    initalState: false,
    selectedLang: "en",
    selctedTextLanguage: "English",
  },
  reducers: {
    toggleAibutton: (state, action) => {
      state.initalState = !state.initalState;
    },
    selectLang: (state, action) => {
      state.selectedLang = action.payload;
    },
    selectedTextLang: (state, action) => {
      state.selctedTextLanguage = action.payload;
    },
  },
});

export const { toggleAibutton, selectLang, selectedTextLang } =
  geminiAIstore.actions;
export default geminiAIstore.reducer;
