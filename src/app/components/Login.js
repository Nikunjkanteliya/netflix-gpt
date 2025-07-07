"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/validation";

const Login = () => {
  const [issignin, setIssignin] = useState(true);
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
