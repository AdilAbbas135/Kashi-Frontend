import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex space-x-2 items-center justify-center">
      <CircularProgress size={50} />{" "}
      <h1 className="text-3xl text-black">Loading..</h1>
    </div>
  );
};

export default Loader;
