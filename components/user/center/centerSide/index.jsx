"use client"; // Required for dynamic client-side functionality

import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import SlidingTextAnimation from "./SlidingTextAnimation ";

import TypewriterTextSlide from "./TypewriterTextSlide";
import Expresties from "../experties";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div>
        <div className="relative h-80 w-full ">
          <div
            className="absolute bg-cover bg-center blur-sm h-[300px] w-[100%]"
            style={{ backgroundImage: "url(img/img2.png)" }}
          ></div>
          <div className="absolute left-0 w-full inset-40 max-md:w-full  flex justify-center items-center">
            <div className=" text-leftTextColorWhite   max-sm2:px-4 z-20">
              <div>
                <TypewriterTextSlide />
              </div>
              <div className="w-[230px] mt-4">
                <SlidingTextAnimation />
              </div>
              <div>
                <div className="mt-4 ">
                  <Link
                    href={"/portfolio"}
                    className="py-2  px-10 max-sm2:px-6 mt-4 max-sm2:text-12 rounded-leftMainBorder bg-lineProgressColor"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Replaced <img> with <Image> for optimization */}
          <div className="max-lg:hidden  absolute inset-y-[105px] right-0  h-[200px] w-[200px] ">
            {/* <Image
              src="/img/emoji.png" // Path to your image
              alt="Emoji"
              width={200} // Set width
              height={200} // Set height
              className="w-full"
            /> */}
            <Image
              src="/img/img1.jpg"
              alt="Təsvir"
              width={600}
              height={400}
              priority // <-- bunu əlavə et
            />
          </div>
        </div>

        <div
          className={`
                  p-2 
                  text-leftTextColorWhite 
                  overflow-y-auto 
                  [&::-webkit-scrollbar]:hidden 
                  grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 
                  h-[319px] 
                  lg:h-[calc(100vh-100px)]
                `}
        >
          <Expresties
            title={"JavaScript and Frameworks"}
            description={
              "Modern JavaScript (ES6+): Experience with advanced JavaScript features like destructuring, async/await, and modules to build dynamic applications. React Ecosystem: Component-Based Architecture: Building reusable and scalable components. State Management: Using Zustand and Redux Toolkit to manage complex application states effectively. React Hooks: Leveraging hooks like useState, useEffect, and useContext for functional programming. React Router: Implementing client-side routing for single-page applications (SPA). Next.js: Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimized performance. API Routes to create serverless functions and REST APIs. Angular Framework: Mastering Angular concepts like two-way data binding, directives, and dependency injection. Reactive Programming using RxJS for asynchronous data streams."
            }
          />
          <Expresties
            title={"HTML & CSS Skills"}
            description={
              "Semantic HTML: Writing clean and accessible HTML that adheres to W3C standards. Advanced CSS Techniques: Expertise in CSS Grid, Flexbox, and responsive layouts to create adaptable designs. CSS Preprocessors: Utilizing SCSS and LESS to write modular, maintainable, and efficient stylesheets. Frameworks and Libraries: Proficiency in Bootstrap and Tailwind CSS to speed up development while maintaining design consistency."
            }
          />

          <Expresties
            title={"Backend and Database Management"}
            description={
              "Node.js: Writing efficient, scalable server-side logic for web applications. Express.js: Creating RESTful APIs and middleware for streamlined backend functionality. MongoDB: Expertise in NoSQL database management. Using Mongoose for schema-based data modeling. Implementing CRUD operations and optimizing database queries."
            }
          />
          <Expresties
            title={"MERN"}
            description={
              "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
            }
          />
          <Expresties
            title={"MERN"}
            description={
              "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
            }
          />
          <Expresties
            title={"MERN"}
            description={
              "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
            }
          />
          <Expresties
            title={"MERN"}
            description={
              "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
            }
          />
          <Expresties
            title={"MERN"}
            description={
              "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
            }
          />
          <Expresties
            title={"MERN"}
            description={
              "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Index;
