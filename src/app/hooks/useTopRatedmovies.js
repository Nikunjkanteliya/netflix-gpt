import React, { useEffect } from "react";
import {  topRatedMoviesData } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useTopRatedmovies = (page = 1) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_APIKEY_TMDB_AUTH_KEY,
            },
          }
        );
        dispatch(
          topRatedMoviesData({
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

export default useTopRatedmovies;
