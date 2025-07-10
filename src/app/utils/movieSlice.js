const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movieList",
  initialState: { nowPlayingMovie: null, videoTrailer: null },
  reducers: {
    getmovieData: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    videoTrailerData: (state, action) => {
      state.videoTrailer = action.payload;
    },
  },
});
export const { getmovieData, videoTrailerData } = movieSlice.actions;
export default movieSlice.reducer;
