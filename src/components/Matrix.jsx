import React from "react";

const Matrix = () => {
  return (
    <section className="bg-clr-light">
      {/* left side */}
      <div className="container flex items-center justify-center relative ">
        <div className="basis-1/2 ">
          <img
            src={require("../assets/images/matrix.png")}
            className="lg:absolute lg:bottom-0"
            alt="matrixPhoto"
          />
        </div>
        {/* right side */}
        <div className="basis-1/2">
          <div className="flex flex-col py-10 justify-center">
            <h3 className="tracking-wider text-clr-melon">
              Action,drama,thriller
            </h3>
            <h2 className="mb-2">Matrix Reloaded</h2>
            <p className="text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
              quod necessitatibus animi ab illo architecto, veritatis, eius
              beatae in, molestiae dicta!
            </p>
            <h3 className="tracking-wider text-clr-red ">
              8 wins 34 nominations
            </h3>
          </div>
        </div>
        <div className="absolute -top-12 left-10 lg:left-0 w-24 h-24 bg-clr-melon rounded-full text-center flex items-center">
          <p className="font-gemunu font-bold uppercase text-xl text-clr-red -rotate-45">
            Old but Gold
          </p>
        </div>
      </div>
    </section>
  );
};

export default Matrix;
