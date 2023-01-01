import React from "react";
import { Link } from "react-router-dom";
import { MoviesData } from "../data";

const Movies = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container flex space-x-16">
        {/* Left Content */}
        <div className="basis-2/3">
          <div className="flex space-x-2 divide-x divide-clr-red divide-opacity-50 mb-8">
            <h2 className="text-clr-red">
              <Link to="">Latest</Link>
            </h2>
            <h2 className="text-clr-grey pl-2  hover:text-clr-red duration-500">
              <Link to="">Popular</Link>
            </h2>
            <h2 className="text-clr-grey pl-2 hover:text-clr-red duration-500">
              <Link to="">Best</Link>
            </h2>
          </div>
          <div className="flex flex-wrap ">
    
          {MoviesData?.map(({id,name,description,image})=>(
              <div key={id} className="group relative overflow-hidden basis-1/3">
              <img
                src={image}
                alt="logo"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500 "
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-clr-grey group-hover:text-clr-melon group-hover:mb-2 duration-500">
                  {name}
                </h3>
                
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500  text-clr-grey">
                  {description}
                </p>

                <div className="absolute flex space-x-8 text-clr-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                 
                  <Link to="" className="hover:text-clr-red duration-500">
                    <i className="fa-solid fa-play"></i>
                  </Link>

                  <Link to="" className="hover:text-clr-red duration-500 ">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                </div>
              </div>
            </div>
            ))}
           
          </div>
        </div>
        <div className="basis-1/3 bg-blue-500"></div>
      </div>
    </section>
  );
};

export default Movies;
