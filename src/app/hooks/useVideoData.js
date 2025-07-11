import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { videoTrailerData } from "../utils/movieSlice";

const useVideoData = (id) => {
  const dispatch = useDispatch();
  const fetch = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        {
          headers: {
            accept: "application/json",
            Authorization:
              process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_APIKEY_TMDB_AUTH_KEY,
          },
        }
      )
      .then((response) => {
        dispatch(videoTrailerData(response?.data?.results));
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetch();
  }, []);
};

export default useVideoData;
