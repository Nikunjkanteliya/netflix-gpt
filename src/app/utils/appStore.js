const { configureStore } = require("@reduxjs/toolkit");
import userSlice from "./userSlice";
import movieSlice from "././movieSlice";
import geminiAIstore from "./geminiSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movieList: movieSlice,
    geminiAI: geminiAIstore,
  },
});

export default appStore;
