import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  useEffect(() => {
    let el = document.body;
    isClicked ? el.classList.remove("dark") : el.classList.add("dark");
  }, [isClicked]);

  return (
    <header className="dark:bg-black bg-gray-200 text-black xl:py-3  py-6 lg:py-12 dark:text-clr-grey font-gemunu uppercase">
      <div className="justify-between container flex items-center md:justify-center space-x-8 lg:space-x-16 ">
        <span
          className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold
           cursor-pointer dark:text-transparent dark:bg-gradient-to-r dark:bg-clip-text dark:from-clr-red
          dark:to-clr-grey bg-gradient-to-r bg-clip-text from-clr-red to-rose-600 "
          onClick={() => {
            window.open("https://muradzeynalli.tk", "_blank");
          }}
        >
          Corn
        </span>

        <div className="block md:hidden">
          <div className=" flex items-center cursor-pointer px-4">
            <i
              onClick={clickHandler}
              className={`fa-solid ${
                isClicked ? "fa-moon" : "fa-sun"
              }  text-white text-2xl mr-3`}
            ></i>
            <i className="fas fa-bars text-2xl"></i>
          </div>
        </div>

        <nav className="hidden md:flex justify-between flex-1">
          <div className="flex items-center space-x-4 lg:text-lg lg:space-x-8">
            <Link
              to=""
              className="dark:hover:text-clr-melon hover:text-blue-500 transition duration-600"
            >
              Movies
            </Link>
            <Link
              to=""
              className="dark:hover:text-clr-melon hover:text-blue-500  transition duration-600"
            >
              Celebreties
            </Link>
            <Link
              to=""
              className="dark:hover:text-clr-melon hover:text-blue-500  transition duration-600"
            >
              Blog
            </Link>
            <Link
              to=""
              className="dark:hover:text-clr-melon hover:text-blue-500  transition duration-600"
            >
              News
            </Link>
            <Link
              to=""
              className="dark:hover:text-clr-melon hover:text-blue-500  transition duration-600"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-8">
            <form>
              <div className="group border-r px-4 mx-4 py-1 border-clr-red ">
                <input
                  type="text"
                  className=" opacity-0 transition duration-700 group-hover:opacity-100 bg-transparent border-b border-clr-red outline-none w-20 lg:w-44"
                />
                <button className="-ml-4 group-hover:ml-0 transition duration-700">
                  <i className="fas fa-search group-hover:text-clr-red transition duration-700"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
            <Link to="#">Login</Link>
            <Link
              to="#"
              className="bg-clr-red px-3 py-1 hover:bg-rose-600 hover:text-clr-grey  text-white transition duration-700 whitespace-nowrap"
            >
              Sign Up
            </Link>
            <i
              className={`fa-solid  ${
                isClicked ? "fa-moon text-black" : "fa-sun"
              } text-white text-2xl cursor-pointer`}
              onClick={clickHandler}
            ></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
