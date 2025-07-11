import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import { settings } from "../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CrouselWrapper = ({ title, moviedata, onEndReached }) => {
  // Custom settings with afterChange hook
  const slidesToShow = settings?.slidesToShow || 4;
  const threshold = moviedata?.length - slidesToShow;
  const infiniteSettings = {
    ...settings,
    afterChange: (current) => {
      // const threshold = moviedata.length - 4; // Trigger 4 slides before the end
      if (current >= threshold && typeof onEndReached === "function") {
        onEndReached();
      }
    },
  };

  return (
    <div className="mb-10">
      <p className="px-4 pt-1 text-4xl">{title}</p>
      <div className="slider-container px-4">
        <Slider {...infiniteSettings}>
          {moviedata?.map((movieData) => (
            <Cards key={movieData?.id} posterPath={movieData?.poster_path} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CrouselWrapper;
