import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0 font-sans">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="w-full">
            <ul className="flex flex-row justify-center gap-10 mt-2 lg:mt-0 text-gray-700 text-lg font-medium">
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
        </div>
      </nav>
    </header>
  );
}

export default Header