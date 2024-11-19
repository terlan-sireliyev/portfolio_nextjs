"use client"; // Required for dynamic client-side functionality

import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import SlidingTextAnimation from "./SlidingTextAnimation ";

import TypewriterTextSlide from "./TypewriterTextSlide";
import Expresties from "../experties";

const Index = () => {
  return (
    <>
      <div className="relative h-80 w-full ">
        <div
          className="absolute bg-cover bg-center blur-sm h-[300px] w-[100%]"
          style={{ backgroundImage: "url(img/img2.png)" }}
        ></div>
        <div className="absolute left-0 inset-40 max-md:w-full  flex justify-center items-center">
          <div className=" text-leftTextColorWhite  z-20">
            <div>
              <TypewriterTextSlide />
            </div>
            <div className="w-[230px] mt-4">
              <SlidingTextAnimation />
            </div>
            <div>
              <button className="py-2 px-10 mt-4 rounded-leftMainBorder bg-lineProgressColor">
                Explore
              </button>
            </div>
          </div>
        </div>
        {/* Replaced <img> with <Image> for optimization */}
        <div className="max-lg:hidden absolute inset-y-[105px] right-0  h-[200px] w-[200px] ">
          <Image
            src="/img/emoji.png" // Path to your image
            alt="Emoji"
            width={200} // Set width
            height={200} // Set height
            className="w-full"
          />
        </div>
      </div>
      <div
        className={`p-2 text-leftTextColorWhite grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 `}
      >
        <Expresties
          title={
            "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
          }
        />
        <Expresties
          title={
            "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
          }
        />
        <Expresties
          title={
            "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
          }
        />
        <Expresties
          title={
            "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
          }
        />
      </div>
    </>
  );
};

export default Index;
