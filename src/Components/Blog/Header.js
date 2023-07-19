import React from "react";
import { GiPlantRoots } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-500 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <GiPlantRoots className="text-white text-2xl mr-2" />
        <h1 className="text-white text-2xl font-bold">My Plant Blog</h1>
      </div>
      <div className="text-white">
        <nav className="relative">
          <ul
            className={`flex flex-col space-y-2 ${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-y-0 md:flex-row md:space-x-4`}
          >
            <li>
              <a href="/">Budding</a>
            </li>
            <li>
              <a href="/">Grafting</a>
            </li>
            <li>
              <a href="/">Gratification</a>
            </li>
            <li>
              <a href="/">Lawn Care</a>
            </li>
            <li>
              <a href="/">Gardening Tips</a>
            </li>
            {isMenuOpen && (
              <li className="absolute top-0 right-0 mt-2 mr-2">
                <button
                  className="text-white text-2xl"
                  onClick={toggleMenu}
                  aria-label="Close Menu"
                >
                  <AiOutlineClose />
                </button>
              </li>
            )}
          </ul>
          {!isMenuOpen && (
            <button
              className="text-white md:hidden text-2xl absolute top-1/2 transform -translate-y-1/2 right-4 p-2"
              onClick={toggleMenu}
              aria-label="Open Menu"
            >
              <AiOutlineMenu />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
