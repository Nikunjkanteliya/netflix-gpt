import React from "react";
import Popup from "reactjs-popup";
import useModalvideos from "../hooks/useModalvideos";
import { useSelector } from "react-redux";

const Modal = ({ isopen, title, desc, setIsopen, id }) => {
  useModalvideos(id, isopen);
  const movieList = useSelector((state) => state.movieList?.popupMovieTrailor);

  const trailer = movieList?.find(
    (video) => video?.type === "Trailer" && video?.site === "YouTube"
  );
  return (
    <div>
      <Popup modal nested open={isopen} onClose={() => setIsopen(false)}>
        {() => (
          <div className="modal">
            <button className="close" onClick={() => setIsopen(false)}>
              &times;
            </button>
            <div className="header "> {title} </div>
            <div className="flex justify-center p-4 ">
              <iframe
                className="aspect-video"
                src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="content">
              <p>{desc}</p>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Modal;
