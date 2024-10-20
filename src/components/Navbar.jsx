import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import avatar1 from "../assets/images/avatar1.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-background-color w-auto">
      <nav className="navbar flex items-center justify-between gap-5 px-3 py-6">
        <div className="flex items-center gap-12">
          <div className="codelabs_logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navlist flex space-x-8 list-none items-center">
            <li>
              <Link className="no-underline text-main-color" to="/challenges">
                Challenges
              </Link>
            </li>
            <li>
              <Link className="no-underline text-main-color" to="/leaderboard">
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={avatar1}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-main-color">John Smith</p>
          </div>
          <div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full p-1">
                <div
                  className={`h-4 w-4 bg-white dark:bg-black rounded-full shadow-md transform duration-300 ease-in-out ${
                    isDarkMode ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-20">
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
