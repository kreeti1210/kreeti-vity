import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    // <header className="shadow sticky z-50 top-0">
    //   <div className="flex flex-row gap-4 items-center mb-10 justify-center align-center">
    //     <nav className="flex flex-row justify-around items-center gap-4 list-none p-4 w-1/3 z-30 top-0">
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //     </nav>
    //   </div>
    // </header>
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