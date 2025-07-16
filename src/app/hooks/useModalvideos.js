import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { popupTrailerData } from "../utils/movieSlice";

const useModalvideos = (id, shouldFetch) => {
  const dispatch = useDispatch();
  const fetch = async () => {
    if (!shouldFetch || !id) return;
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
        dispatch(popupTrailerData(response?.data?.results));
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetch();
  }, [shouldFetch, id, dispatch]);
};

export default useModalvideos;
