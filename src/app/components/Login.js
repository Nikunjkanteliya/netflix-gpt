import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg')] bg-cover bg-center opacity-50 -z-10"></div>
      <Header />
      <div className="mx-auto max-w-[480px] text-white bg-black/70  px-16 py-12 ">
        <h1 className="text-3xl">Sign In</h1>
        <form>
          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full mt-4 px-4 py-3 rounded-md border-[1px]"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full mt-4 px-4 py-3 rounded-md border-[1px]"
          />
          <button
            type="submit"
            className="w-full mt-4 px-4 py-3 rounded-md bg-[#E50914]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
