import React from "react";
import { CDN_IMG } from "../utils/constants";

const Cards = ({ posterPath }) => {
  return (
    <div className=" p-4  shadow-2xl  transform transition-transform duration-300 hover:-translate-y-2 hover:bg-">
      <img src={CDN_IMG + posterPath} alt="posterPath" />
    </div>
  );
};

export default Cards;
