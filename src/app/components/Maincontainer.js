import React from "react";
import Videocontainer from "./Videocontainer";
import Secondary from "./Secondary";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const movieList = useSelector((state) => state.movieList?.nowPlayingMovie);
  if (!movieList) return;
  const videoInfo = movieList[0];
  return (
    <div>
      <Videocontainer
        title={videoInfo?.original_title}
        overview={videoInfo?.overview}
        posterPath={videoInfo?.poster_path}
        id={videoInfo?.id}
      />
      <Secondary moviData={movieList} />
    </div>
  );
};

export default Maincontainer;
