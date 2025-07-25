import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getmovieData } from "../utils/movieSlice";

const useMovieListApiData = () => {
  const nowPlayingmovies = useSelector(
    (store) => store.movieList.nowPlayingMovie
  );
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_APIKEY_TMDB_AUTH_KEY,
          },
        }
      )
      .then((res) => {
        dispatch(getmovieData(res?.data?.results));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    !nowPlayingmovies && fetchMovies();
  }, []);
};

export default useMovieListApiData;
