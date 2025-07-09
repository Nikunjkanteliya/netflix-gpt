"use client";
import React from "react";
import { logoutUser } from "../utils/Logout";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.user);

  return (
    <header className="mx-auto left-0 right-0 px-[48px] py-[24px] max-w-[calc(83.3333%-6rem)]  flex justify-between">
      <div className="w-36">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflixlogo"
        />
      </div>

      {userData && (
        <div className="flex gap-3 items-end">
          <div>
            <img
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              // src={userData?.photoURL}
              alt="userimage"
              className="w-10 "
            />
          </div>

          <p className="text-2xl text-white" onClick={() => logoutUser(router)}>
            Logout!
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
