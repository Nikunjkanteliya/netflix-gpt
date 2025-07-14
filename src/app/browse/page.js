"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import useMovieListApiData from "../hooks/usemovieListapiData";
import Maincontainer from "../components/Maincontainer";
import AIsearchPage from "../components/AIsearchPage";

const page = () => {
  const aiToggle = useSelector((store) => store.geminiAI.initalState);

  const userData = useSelector((state) => state.user);
  useMovieListApiData();

  return (
    <div>
      <Header />
      {!aiToggle ? <Maincontainer /> : <AIsearchPage />}
    </div>
  );
};

export default page;
