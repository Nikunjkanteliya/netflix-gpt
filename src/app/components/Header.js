"use client";
import React, { useEffect } from "react";
import { logoutUser } from "../utils/Logout";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { toggleAibutton } from "../utils/geminiSlice";

const Header = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.user);
  const aiToggle = useSelector((store) => store.geminiAI.initalState);

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
    <header className="mx-auto left-0 right-0 px-[48px] py-[24px] max-w-[calc(83.3333%-6rem)]  flex justify-between">
      <div className="w-36">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflixlogo"
        />
      </div>
      <div></div>
      {userData && (
        <div className="flex gap-3 items-end">
          <button
            className="px-4 py-2 border border-white rounded-lg"
            onClick={() => dispatch(toggleAibutton())}
          >
            {!aiToggle ? "Ask AI 🔎" : "Movies"}
          </button>

          <div>
            <img
              // src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              src={userData?.photoURL}
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
