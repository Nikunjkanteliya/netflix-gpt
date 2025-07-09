"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [issignin, setIssignin] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  //   const [fieldValues, setFieldvalues] = useState({
  //     email: "",
  //   });

  const [error, setError] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSigninForm = () => {
    setIssignin(!issignin);
  };
  const handleSigninValidation = () => {
    const validatedData = formValidation(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );

    setError(validatedData);
    if (!validatedData) {
      if (!issignin) {
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            // Signed up
            const user = auth?.currentUser;
            toast.success("Account created successfully");
            // setIssignin(true);

            updateProfile(auth.currentUser, {
              displayName: name?.current?.value,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                // Profile updated!
                // ...
                dispatch(
                  addUser({
                    uid: user?.uid,
                    email: user?.email,
                    displayName: user?.displayName,
                    photoURL: user?.photoURL,
                  })
                );
                router.push("/about");
              })
              .catch((error) => {
                // An error occurred
                // ...
                toast.error(error);
                // dispatch(removeUser());
              });

            email.current.value = null;
            password.current.value = null;
            name.current.value = null;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            toast.success("Logged in successfully");
            email.current.value = null;
            password.current.value = null;
            router.push("/about");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            toast.error(errorMessage);
          });
      }
    }
  };
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg')] bg-cover bg-center opacity-50 -z-10"></div>
      <Header />
      <div className="mx-auto max-w-[480px] text-white bg-black/70  px-16 py-12  rounded-md">
        <h1 className="text-3xl">{issignin ? "Sign In" : "Sign Up"}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {!issignin && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="UserName"
                className="w-full mt-4 px-4 py-3 rounded-md border-[1px]"
              />
              <p className="text-red-700 font-bold text-[12px] py-1">
                {error?.nameError}
              </p>
            </>
          )}
          <>
            <input
              // onChange={(e) => {
              //   setFieldvalues({ email: e.target.value });
              // }}
              ref={email}
              type="email"
              placeholder="Email or mobile number"
              className="w-full mt-4 px-4 py-3 rounded-md border-[1px]"
            />
            <p className="text-red-700 font-bold text-[12px] py-1">
              {error?.emailError}
            </p>
          </>
          <>
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="w-full mt-4 px-4 py-3 rounded-md border-[1px]"
            />
            <p className="text-red-700 font-bold text-[12px] p-1">
              {error?.passwordError}
            </p>
          </>
          <button
            onClick={handleSigninValidation}
            type="submit"
            className="w-full mt-4 px-4 py-3 rounded-md bg-[#E50914]"
          >
            {issignin ? "Sign In" : "Sign Up "}
          </button>
          <p
            className="mt-4 text-[14px] cursor-pointer"
            onClick={handleSigninForm}
          >
            {" "}
            {issignin
              ? "New to Netflix? Signup Now"
              : "Already registred?Sign in Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
