import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="bg-black text-clr-grey">
      <div className="container flex flex-col-reverse md:flex-row pb-8 px-16 ">
        {/* left */}
        <div className="basis-1/3">

        <span
          className=" md:pl-0 text-2xl lg:text-3xl font-bold cursor-pointer text-transparent bg-gradient-to-r bg-clip-text from-clr-red to-clr-grey "
          onClick={() => {
            window.open("https://muradzeynalli.tk", "_blank");
          }}
        >
          Corns
        </span>
        <p className="text-sm mt-2"> 2023 MuradZeynalli &#169; Copyright</p>
        </div>
        
      {/* Middle */}
      <div className="basis-1/3">
        <h2 className="mb-2 text-clr-red ">LINKS</h2>
        <div className="grid grid-cols-5 gap-2 mb-2 lg:mb-0">
          <Link className="col-span-2 duration-500 hover:text-clr-melon " to="">
            Movies
          </Link>
          <Link className="col-span-2 duration-500 hover:text-clr-melon " to="">
            Celebrities
          </Link>
          <Link className="col-span-2 duration-500 hover:text-clr-melon " to="">
            Blogs
          </Link>
          <Link className="col-span-2 duration-500 hover:text-clr-melon " to="">
            About 
          </Link>
          <Link className="col-span-2 duration-500 hover:text-clr-melon " to="">
            Social Media
          </Link>
        </div>
      </div>
      {/* Right */}

      <div className="basis-1/3">
        <h2 className="mb-2 lg:mb-0 lg:mt-0 text-clr-red">Follow Us</h2>
        <form  className="flex mb-2">
            <input type="text" placeholder="Type your email" className="py-1 px-2 outline-none bg-transparent border placeholder:text-xs border-clr-red" />
            <button className="py-1 px-2  outline-none bg-transparent border border-clr-red bg-clr-red" >Subscripe</button>
        </form>
      </div>
      </div>
    </footer>
  );
};

export default footer;
