"use client";
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import useMovieListApiData from "../hooks/usemovieListapiData";
import Maincontainer from "../components/Maincontainer";

const page = () => {
  const userData = useSelector((state) => state.user);
  useMovieListApiData();

  return (
    <div>
      <Header />
      <Maincontainer />
    </div>
  );
};

export default page;
