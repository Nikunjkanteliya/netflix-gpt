"use client";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export const logoutUser = (router) => {
  signOut(auth)
    .then(() => {
      router.push("/");

      // Sign-out successful.
    })
    .catch((error) => {
      toast.error(error);
      // An error happened.
    });
};
