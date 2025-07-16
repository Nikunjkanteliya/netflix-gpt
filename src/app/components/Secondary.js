import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CrouselWrapper from "./CrouselWrapper";
import useUpcomingMovies from "../hooks/useUpcomingmovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedmovies from "../hooks/useTopRatedmovies";
import useModalvideos from "../hooks/useModalvideos";

const Secondary = ({ moviData }) => {
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [topratedMoviePage, setTopRatedMoviePage] = useState(1);
  const [popularMoviePage, setPopularMoviePage] = useState(1);

  usePopularMovie(popularMoviePage);
  useTopRatedmovies(topratedMoviePage);
  useUpcomingMovies(upcomingPage);

  const popularMoviesData = useSelector(
    (store) => store?.movieList?.popularMoviesData
  );
  const topRatedMoviesData = useSelector(
    (store) => store?.movieList?.topRatedmoviesData
  );
  const upcomingMovieData = useSelector(
    (store) => store?.movieList?.upcomingMovie
  );
  return (
    <div>
      <CrouselWrapper title={"Now Playing"} moviedata={moviData} />
      <CrouselWrapper
        title={"Top Rated"}
        moviedata={topRatedMoviesData}
        onEndReached={() => setTopRatedMoviePage((p) => p + 1)}
      />

      <CrouselWrapper
        title={"Popular"}
        moviedata={popularMoviesData}
        onEndReached={() => setPopularMoviePage((p) => p + 1)}
      />
      <CrouselWrapper
        title={"Upcoming"}
        moviedata={upcomingMovieData}
        onEndReached={() => setUpcomingPage((p) => p + 1)}
      />
    </div>
  );
};

export default Secondary;
