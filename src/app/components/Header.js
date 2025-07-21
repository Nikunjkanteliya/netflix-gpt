"use client";
import React, { useEffect } from "react";
import { logoutUser } from "../utils/Logout";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import {
  selectedTextLang,
  selectLang,
  toggleAibutton,
} from "../utils/geminiSlice";
import { selectArrow } from "../utils/constants";

const Header = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.user);
  const aiToggle = useSelector((store) => store.geminiAI.initalState);
  const selectedlang = useSelector((store) => store.geminiAI.selectedLang);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/browse");
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        localStorage.setItem(
          "user",
          JSON.stringify({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);

  // dispatch on click and useSelector for the same values
  return (
    <header className="mx-auto left-0 right-0 px-[48px] py-[24px] max-w-[calc(83.3333%-6rem)]  flex justify-between items-center max-xl:max-w-[100%]  max-md:py-[10px] max-md:px-[10px]">
      <div className="w-36 max-md:w-24">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflixlogo"
        />
      </div>
      <div></div>
      {userData && (
        <div className="flex gap-3 items-end max-md:w-full max-md:justify-end max-md:items-center">
          {aiToggle && (
            <div className="relative">
              <select
                className="appearance-none w-full bg-black text-white border border-gray-300  py-2 px-4 pr-10 rounded leading-tight focus:outline-none  text-[18px] max-sm:text-[14px]"
                onChange={(e) => {
                  dispatch(
                    selectedTextLang(
                      e.target.options[e.target.selectedIndex].text
                    )
                  );

                  dispatch(selectLang(e.target.value));
                }}
                value={selectedlang}
              >
                <option value={"en"}>English</option>
                <option value={"hi"}>Hindi</option>
                <option value={"mr"}>Marathi</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {selectArrow}
              </div>
            </div>
          )}

          <button
            className="px-4 py-2 border border-white rounded-lg max-md:px-2 max-md:py-2 max-md:text-[14px] text-white"
            onClick={() => dispatch(toggleAibutton())}
          >
            {!aiToggle ? "Ask AI 🔎" : "Movies"}
          </button>

          <div>
            <img
              // src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              src={userData?.photoURL}
              alt="userimage"
              className="w-10 max-md:w-5 "
            />
          </div>

          <p
            className="text-2xl text-white max-md:text-lg"
            onClick={() => logoutUser(router)}
          >
            Logout!
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
