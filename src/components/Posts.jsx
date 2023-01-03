import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <section className="py-24 bg-black text-clr-grey">
      <div className="container px-10 lg:px-0">
        <h2 className="p-4">
          <Link>Popular Post</Link>
        </h2>

        <div className="grid grid-cols-6  gap-10">
          <div className=" col-span-6 lg:col-span-3 border border-clr-red ">
            <div className="border-b border-clr-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <img
                src={require("../assets/images/userava1.jpg")}
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur mollitia laborum obcaecati adipisci molestias,
              repellat omnis nihil laboriosam, officiis possimus non unde ut
              vitae voluptates?
            </p>
            <div className="justify-end border-t border-clr-red p-4 flex items-center font-gemunu text-xs space-x-4">
              <p>on January 13,2023</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>75+</p>
                <i className="fa-regular fa-heart"></i>
                <p>50+</p>
              </div>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3 border border-clr-red ">
            <div className="border-b border-clr-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <img
                src={require("../assets/images/userava1.jpg")}
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur mollitia laborum obcaecati adipisci molestias,
              repellat omnis nihil laboriosam, officiis possimus non unde ut
              vitae voluptates?
            </p>
            <div className="justify-end border-t border-clr-red p-4 flex items-center font-gemunu text-xs space-x-4">
              <p>on January 13,2023</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>75+</p>
                <i className="fa-regular fa-heart"></i>
                <p>50+</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block col-span-3 lg:col-span-2 border border-clr-red ">
            <div className="border-b border-clr-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <img
                src={require("../assets/images/userava1.jpg")}
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur mollitia laborum obcaecati adipisci molestias,
              repellat omnis nihil laboriosam, officiis possimus non unde ut
              vitae voluptates?
            </p>
            <div className="justify-end border-t border-clr-red p-4 flex items-center font-gemunu text-xs space-x-4">
              <p>on January 13,2023</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>75+</p>
                <i className="fa-regular fa-heart"></i>
                <p>50+</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block col-span-3 lg:col-span-2 border border-clr-red ">
            <div className="border-b border-clr-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <img
                src={require("../assets/images/userava1.jpg")}
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur mollitia laborum obcaecati adipisci molestias,
              repellat omnis nihil laboriosam, officiis possimus non unde ut
              vitae voluptates?
            </p>
            <div className="justify-end border-t border-clr-red p-4 flex items-center font-gemunu text-xs space-x-4">
              <p>on January 13,2023</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>75+</p>
                <i className="fa-regular fa-heart"></i>
                <p>50+</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2 border border-clr-red ">
            <div className="border-b border-clr-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <img
                src={require("../assets/images/userava1.jpg")}
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur mollitia laborum obcaecati adipisci molestias,
              repellat omnis nihil laboriosam, officiis possimus non unde ut
              vitae voluptates?
            </p>
            <div className="justify-end border-t border-clr-red p-4 flex items-center font-gemunu text-xs space-x-4">
              <p>on January 13,2023</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>75+</p>
                <i className="fa-regular fa-heart"></i>
                <p>50+</p>
              </div>
            </div>
          </div>




          
        </div>
      </div>
    </section>
  );
};

export default Posts;
