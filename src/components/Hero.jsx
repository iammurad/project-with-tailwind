import React from "react";
import CoverPhoto from "../assets/images/batman.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="h-96 lg:h-128 group relative">
      <img
        src={CoverPhoto}
        alt="mainCover"
        className="h-full w-full object-cover "
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
        <div className="container pl-2 lg:pl-0">
          <h3 className="text-clr-melon tracking-wider group-hover:mb-1 duration-500">
            Action,Drama,Thriller
          </h3>
          <h1 className=" text-4xl lg:text-6xl text-clr-grey group-hover:mb-1 duration-500">
            The Dark Knight
          </h1>
          <p className=" text-clr-grey group-hover:mb-1 duration-500 w-3/4 text-sm lg:text-base lg:w-2/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            vitae libero repellat cupiditate error saepe? Obcaecati numquam
            aperiam nam rem.
          </p>

          <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-20 duration-1000">
            <div className="flex space-x-2 items-center cursor-pointer">
              <Link
                to=""
                className="text-clr-grey uppercase lg:text-lg hover:text-clr-red duration-500 "
              >
                Watch Trailer
              </Link>
              <div className="flex items-center h-8 w-8 text-center justify-center rounded-full  bg-clr-red text-clr-grey">
                <i className="fas fa-play "></i>
              </div>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <Link
                to=""
                className="text-clr-grey uppercase lg:text-lg hover:text-clr-red duration-500 "
              >
                Check Ticket
              </Link>
              <div className="flex items-center h-8 w-8 text-center justify-center rounded-full  bg-clr-red text-clr-grey">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-3 absolute bottom-2 lg:bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000">
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-clr-red cursor-pointer"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-clr-grey cursor-pointer"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-clr-grey cursor-pointer"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-clr-grey cursor-pointer"></div>
      </div>
    </section>
  );
};

export default Hero;
