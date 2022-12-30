import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black py-12 text-clr-grey font-gemunu uppercase">
      <div className="container flex items-center justify-center space-x-16 ">
        <span
          className="text-6xl font-bold cursor-pointer text-transparent bg-gradient-to-r bg-clip-text from-clr-red to-clr-grey "
          onClick={() => {
            window.open("https://muradzeynalli.tk", "_blank");
          }}
        >
          POP-C o r n
        </span>
        <nav className="justify-between flex-1">
          <div className="flex items-center text-lg space-x-8">
            <Link
              to=""
              className="hover:text-clr-melon transition duration-600"
            >
              Movies
            </Link>
            <Link
              to=""
              className="hover:text-clr-melon transition duration-600"
            >
              Celebreties
            </Link>
            <Link
              to=""
              className="hover:text-clr-melon transition duration-600"
            >
              Blog
            </Link>
            <Link
              to=""
              className="hover:text-clr-melon transition duration-600"
            >
              News
            </Link>
            <Link
              to=""
              className="hover:text-clr-melon transition duration-600"
            >
              About
            </Link>
          </div>
        </nav>
        <div className="flex items-center space-x-8">
          <form>
            <div className="group border-r px-4 mx-4 py-1 border-clr-red ">
              <input
                type="text"
                className=" opacity-0 transition duration-700 group-hover:opacity-100 bg-transparent border-b border-clr-red outline-none w-44"
              />
              <button className="-ml-4 group-hover:ml-0 transition duration-700">
                <i className="fas fa-search group-hover:text-clr-red transition duration-700"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center space-x-8 text-lg">
          <Link to="#">Login</Link>
          <Link
            to="#"
            className="bg-clr-red px-3 py-1 hover:bg-rose-600 hover:text-clr-grey transition duration-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
