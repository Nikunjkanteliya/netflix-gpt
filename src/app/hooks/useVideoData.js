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
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTA2NWMzZDczMmEzYzJlZWQ0NTRlMTMwNDZiNDZlNSIsIm5iZiI6MTc1MjEyMTQ1NC42MTQsInN1YiI6IjY4NmY0MDZlNTE5NTg2MDZjOTU0MGQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZG_Hoyorqsad2ebp1MrkUWwRqP-P3ZJzHdP24_vRdCI",
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
