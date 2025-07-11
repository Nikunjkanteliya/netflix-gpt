import React, { useEffect } from "react";
import { popularMoviesData } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const usePopularMovie = (page = 1) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_APIKEY_TMDB_AUTH_KEY,
            },
          }
        );
        dispatch(
          popularMoviesData({
            movies: res?.data?.results,
            append: page > 1, // append on page > 1
          })
        );
      } catch (err) {
        console.error("Error fetching upcoming movies:", err);
      }
    };

    fetchData();
  }, [page]);
};

export default usePopularMovie;
