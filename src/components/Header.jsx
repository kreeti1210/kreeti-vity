import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-base-500 font-sans">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex justify-center items-center mx-auto max-w-screen-xl">
          <ul className="flex flex-row gap-10 text-gray-450 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors duration-200 px-3 py-2 rounded-md ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `transition-colors duration-200 px-3 py-2 rounded-md ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-500"
                  }`
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-200 px-3 py-2 rounded-md ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-500"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors duration-200 px-3 py-2 rounded-md ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-500"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
