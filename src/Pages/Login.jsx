import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({});
  const TrySignin = async () => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/account/login`, Data)
      .then(async (res) => {
        console.log("user signed in successfully");
        localStorage.setItem("token", res.data.authtoken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response.data.error
            ? err.response.data.error
            : "Something Went Wrong! Try Again",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };
  return (
    //Main Header with Background Image
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay on background Image */}
      <div className="bg-black/20 h-screen w-full  flex flex-col">
        {/* Main Section of Login Page */}
        <div className="bg-white bg-opacity-50 m-auto  flex justify-center items-center flex-col p-10 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
          {/* From Section */}
          <form
            className="space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              TrySignin();
            }}
          >
            <div>
              <TextField
                id="outlined-basic-1"
                label="Enter Your Email"
                variant="outlined"
                type="email"
                required
                value={Data?.Email}
                onChange={(e) => {
                  setData({ ...Data, Email: e.target.value });
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic-2"
                label="Enter Your Password"
                variant="outlined"
                type="password"
                required
                value={Data?.Password}
                onChange={(e) => {
                  setData({ ...Data, Password: e.target.value });
                }}
              />
            </div>
            {/* Forgot Password */}
            <li className="list-none cursor-pointer">
              <a href="/">Forgot Password</a>
            </li>

            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="mt-3">
            <Link to={"/signup"}>
              {" "}
              <p className="">
                Don't have Account?{" "}
                <span className=" cursor-pointer">SignUp</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
