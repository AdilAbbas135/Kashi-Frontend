import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";

export default function Header() {
  const token = localStorage.getItem("token");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="max-w-[1620px] mx-auto h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url("banner.jpg")' }}
    >
      <div className="mx-auto bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-between items-center md:flex-row flex-col py-2">
        {/* Logo */}
        <div
          className={`text-3xl text-green-900 font-semibold p-5 ${
            showMenu ? "hidden md:block" : ""
          }`}
        >
          Green Valley
        </div>
        {/* Menu */}
        <div className="relative">
          {showMenu ? (
            <FaTimes
              className="md:hidden text-3xl mr-5 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="md:hidden text-3xl mr-5 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
          <ul
            className={`text-[18px] ${
              showMenu ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-10 mr-5 font-medium text-black`}
          >
            <Link to="/plant-store">
              <li className="py-1 px-2 hover:bg-green-900 hover:rounded hover:text-white duration-500">
                Plant Store
              </li>
            </Link>
            <a href="http://127.0.0.1:5000/">
              <li className="py-1 px-2 hover:bg-green-900 hover:rounded hover:text-white duration-500">
                Disease Detection
              </li>
            </a>

            <a
              href="https://wa.me/03436959904"
              target="_blank"
              rel="noreferrer"
            >
              <li className="py-1 px-2 hover:bg-green-900 hover:rounded hover:text-white duration-500">
                Chat with Expert
              </li>
            </a>

            {token ? (
              <Link to={"/admin"}>
                <Avatar sx={{ bgcolor: green[500] }} className="cursor-pointer">
                  <FaUserCircle size={27} />
                </Avatar>
              </Link>
            ) : (
              <Link to="/login">
                <li className="py-1 px-2 hover:bg-green-900 hover:rounded hover:text-white duration-500">
                  Login
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>

      {/* GlassMorphism Slide */}
      <div className="max-w-md mx-auto md:max-w-[450px]  bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm mt-10 md:mt-48 flex justify-center items-center flex-col sm:max-w-full sm:h-96">
        <h1 className="text-6xl  font-medium text-green-900">Green Valley</h1>
        <p className="font-medium  text-black text-xl">
          “Flower will not grow if the stem doesn't allow..”
        </p>
        <button className="text-[18px] bg-green-600 text-white p-2 font-medium mt-3">
          Explore Now
        </button>
      </div>
    </div>
  );
}
