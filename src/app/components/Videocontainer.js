import React, { useEffect } from "react";
import { CDN_IMG } from "../utils/constants";
import useVideoData from "../hooks/useVideoData";
import { useSelector } from "react-redux";

const Videocontainer = ({ title, overview, posterPath, id }) => {
  useVideoData(id);
  const movieTrailorData = useSelector(
    (store) => store?.movieList?.videoTrailer
  );
  const trailorKey = movieTrailorData?.filter((ele) => ele?.type === "Trailer");
  if (!trailorKey) return;
  const ytKey = trailorKey[0]?.key;

  //   yt paly and pause

  return (
    <div>
      <div className="relative w-screen ">
        {
          <iframe
            className="w-screen aspect-video "
            src={`https://www.youtube.com/embed/${ytKey}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        }
      </div>
      <div className="w-screen aspect-video absolute top-28 pl-32 pt-56 bg-black/40 pointer-events-none">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="w-1/3 text-lg pl-2"> {overview}</p>
        <div className="pt-3 pointer-events-auto">
          <button className="bg-gray-700 px-6 py-4 text-xl opacity-50 rounded-xl text-white hover:bg-gray-500">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-6 py-4 text-xl opacity-50 rounded-xl text-white ml-2 hover:bg-gray-500">
            Overview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videocontainer;
