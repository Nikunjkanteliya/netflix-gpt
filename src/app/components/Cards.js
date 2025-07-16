import React, { useRef, useState } from "react";
import { CDN_IMG } from "../utils/constants";
import "reactjs-popup/dist/index.css";
import Modal from "../utils/Modal";

const Cards = ({ posterPath, title, movieDesc, ids }) => {
  const [isopen, setIsopen] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (Math.abs(e.clientX - dragStartX.current) > 5) {
      isDragging.current = true;
    }
  };
  const handleMouseUp = () => {
    if (!isDragging.current) {
      setIsopen(true); // Only open if not dragging
    }
  };

  return (
    <>
      <div
        className=" p-4  shadow-2xl  transform transition-transform duration-300 hover:-translate-y-2 hover:bg-"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img src={CDN_IMG + posterPath} alt="posterPath" draggable={false} />
      </div>
      <Modal
        isopen={isopen}
        title={title}
        img={posterPath}
        desc={movieDesc}
        setIsopen={setIsopen}
        id={ids}
      />
    </>
  );
};

export default Cards;
