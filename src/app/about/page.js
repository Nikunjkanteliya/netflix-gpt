"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const page = () => {
  const userData = useSelector((state) => state.user);

  return (
    <div>
      <Header />
      <p> wel-come {userData?.displayName} </p>
    </div>
  );
};

export default page;
