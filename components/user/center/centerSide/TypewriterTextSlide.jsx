"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
const TypewriterTextSlide = () => {
  return (
    <>
      <h1 className="text-3 font-bold  max-sm:text-2 ">
        Hello, Check this out!
      </h1>
      <h1 className="bg-red-500 mt-2">
        <span className=" font-bold">
          <span className=" font-bold">{"<"}</span>
          <span className="text-lineProgressColor font-bold">div</span>
          <span className=" font-bold">{">"}</span>
          I'm a
        </span>
        <span className="z-40 ml-2 text-lineProgressColor">
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={[
              "Web_Developer",
              "React_Developer",
              "Next_Developer",
              "Mern Stack Developer",
            ]}
          />
        </span>
        <span className=" font-bold">{"</"}</span>
        <span className="text-lineProgressColor font-bold">div</span>
        <span className="font-bold">{">"}</span>
      </h1>
    </>
  );
};

export default TypewriterTextSlide;
