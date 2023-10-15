import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full shadow-md bg-white">
      <nav className="">
        <div className="max-w-screen flex justify-between mx-auto ">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pl-3">
              APP LOGO
            </span>
          </a>
          <div className="w-full md:w-auto">
            <ul className="font-medium flex p-4">
              <li>
                <Link to="/" className="py-2 pl-3 pr-4 text-gray-900">
                  DASHBOARD
                </Link>
              </li>
              <li>
                <a href="/create-ads" className="py-2 pl-3 pr-4 text-gray-900 ">
                  CREATE ADS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
