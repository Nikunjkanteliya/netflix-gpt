import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getmovieData } from "../utils/movieSlice";

const useMovieListApiData = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTA2NWMzZDczMmEzYzJlZWQ0NTRlMTMwNDZiNDZlNSIsIm5iZiI6MTc1MjEyMTQ1NC42MTQsInN1YiI6IjY4NmY0MDZlNTE5NTg2MDZjOTU0MGQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZG_Hoyorqsad2ebp1MrkUWwRqP-P3ZJzHdP24_vRdCI",
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
    fetchMovies();
  }, []);
};

export default useMovieListApiData;
