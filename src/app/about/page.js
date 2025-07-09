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
      <p className="text-center"> wel-come {userData?.displayName} </p>
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-background"
        className="w-full"
      />
    </div>
  );
};

export default page;
