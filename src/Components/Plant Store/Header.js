import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiLeafLine, RiCloseLine, RiMenuLine } from "react-icons/ri";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Header = () => {
  const [DarkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!DarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex justify-center ${
        DarkMode
          ? "bg-DarkModeBg text-DarkModeTxt"
          : "bg-LightModeBg text-LightModeTxt"
      } transition-all`}
    >
      <header className={` `}>
        <nav className="container flex items-center justify-between py-4">
          <a
            href="/"
            className="flex items-center text-center md:text-left text-lg"
          >
            <RiLeafLine className={`text-inherit text-3xl mr-2`} />
            <span className="text-inherit font-bold text-xl mr-12">
              Green Valley
            </span>
          </a>

          <div
            className={`nav__toggle ml-auto cursor-pointer md:hidden ${
              isMenuOpen ? "fixed inset-0 bg-black bg-opacity-50 z-20" : ""
            }`}
            onClick={toggleMenu}
          >
            <RiMenuLine
              className={`text-${DarkMode ? "white" : "gray-900"} text-xl mr-2`}
            />
          </div>

          <div
            className={`nav__menu ${
              isMenuOpen
                ? "fixed inset-0 flex items-center justify-center bg-white z-30"
                : "hidden"
            } md:flex md:flex-grow md:items-center justify-center`}
          >
            <ul className="nav__list uppercase md:flex md:text-center md:space-x-12">
              <li className="nav__item">
                <a href="/home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="/about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="/products" className="nav__link">
                  Products
                </a>
              </li>
              <Link to="/blog">
                <li className="nav__item">Blog</li>
              </Link>

              <li className="nav__item">
                <a href="/contact" className="nav__link">
                  Contact Us
                </a>
              </li>
            </ul>

            <div
              className="nav__close ml-auto cursor-pointer md:hidden"
              onClick={toggleMenu}
            >
              <RiCloseLine
                className={`text-${DarkMode ? "white" : "gray-900"} text-xl`}
              />
            </div>
          </div>

          <div className="nav__btns hidden md:flex md:items-center ml-12">
            {DarkMode ? (
              <IoMdSunny
                className={`change-theme text-${
                  DarkMode ? "white" : "gray-900"
                } mr-2`}
                onClick={toggleTheme}
              />
            ) : (
              <IoMdMoon
                className={`change-theme text-${
                  DarkMode ? "white" : "gray-900"
                } mr-2`}
                onClick={toggleTheme}
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
