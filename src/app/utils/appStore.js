const { configureStore } = require("@reduxjs/toolkit");
import userSlice from "./userSlice";
import movieSlice from "././movieSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movieList: movieSlice,
  },
});

export default appStore;
