import React from "react";
import Header from "./Header";
import Login from "./Login";
import { ToastContainer } from "react-toastify";

const Body = () => {
  return (
    <div>
      <Login />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Body;
