const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movieList",
  initialState: {
    nowPlayingMovie: null,
    videoTrailer: null,
    popularMoviesData: null,
    topRatedmoviesData: null,
    upcomingMovie: null,
  },
  reducers: {
    getmovieData: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    videoTrailerData: (state, action) => {
      state.videoTrailer = action.payload;
    },
    popularMoviesData: (state, action) => {
      const { movies, append } = action.payload;

      if (append) {
        const existingIds = new Set(state.popularMoviesData.map((m) => m.id));
        const newMovies = movies.filter((m) => !existingIds.has(m.id));
        state.popularMoviesData = [...state.popularMoviesData, ...newMovies];
      } else {
        state.popularMoviesData = movies;
      }
    },
    topRatedMoviesData: (state, action) => {
      const { movies, append } = action.payload;

      if (append) {
        const existingIds = new Set(state.topRatedmoviesData.map((m) => m.id));
        const newMovies = movies.filter((m) => !existingIds.has(m.id));
        state.topRatedmoviesData = [...state.topRatedmoviesData, ...newMovies];
      } else {
        state.topRatedmoviesData = movies;
      }
    },
    upcomingMovieData: (state, action) => {
      const { movies, append } = action.payload;
      if (append) {
        const existingIds = new Set(state.upcomingMovie.map((m) => m.id));
        const newMovies = movies.filter((m) => !existingIds.has(m.id));
        state.upcomingMovie = [...state.upcomingMovie, ...newMovies];
      } else {
        state.upcomingMovie = movies;
      }
    },
    upcomingPageCount: (state, action) => {
      state.upcomingPageCount = action.payload;
    },
  },
});
export const {
  getmovieData,
  videoTrailerData,
  popularMoviesData,
  topRatedMoviesData,
  upcomingMovieData,
} = movieSlice.actions;
export default movieSlice.reducer;
