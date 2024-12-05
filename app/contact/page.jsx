"use client"; // Add this line to specify client-side rendering
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const page = () => {
  return (
    <div>
      <div className="bg-leftBgOne w-[full] h-[290px]  max-md:h-[290px]  p-4 rounded-border5">
        <h1 className="text-leftTextColorWhite font-bold py-2 mt-4">
          Contact Information
        </h1>
        <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 mt-4">
          <div className="bg-mainBgColor border border-leftTextColorGreen  rounded-border15 p-6 flex flex-col gap-4">
            <div className="flex justify-between text-leftTextColorWhite">
              <p>Gmail:</p>
              <p>sireliyevterlan95@gmail.com</p>
            </div>
            <div className="flex justify-between text-leftTextColorWhite">
              <p>Linkedin:</p>
              <p>terlan-sireliyev</p>
            </div>
            <div className="flex justify-between text-leftTextColorWhite">
              <p>Phone:</p>
              <p>+994-50-836-96-69</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 bg-mainBgColor border border-leftTextColorGreen rounded-border15 mt-4 p-6">
          <p className="text-15 text-leftTextColorWhite">
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <SiGmail />
            </a>
          </p>
          <p className="text-15 text-leftTextColorWhite">
            {/* href="" */}
            <a href="https://www.linkedin.com/in/terlan-sireliyev-820a44258/">
              <FaLinkedin />
            </a>
          </p>
          <p className="text-15 text-leftTextColorWhite">
            <a href="https://github.com/terlan-sireliyev?tab=repositories">
              <FaGithub />
            </a>
          </p>
        </div>
      </div>
      <div className="bg-mainBgColor mt-12 p-4 rounded-border5">
        <h2 className="text-leftTextColorWhite font-bold pb-4">Get It Touch</h2>
        <div className="bg-leftBgOne border border-leftTextColorGreen flex rounded-border5 py-4 flex-col gap-4 items-center justify-center ">
          <div className="w-[50%] max-lg:w-full my-2 p-2">
            <input
              className="w-full p-2 rounded-border5 bg-mainBgColor text-leftTextColorWhite"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="w-[50%] max-lg:w-full my-2 p-2">
            <input
              className="w-full p-2 rounded-border5 bg-mainBgColor text-leftTextColorWhite"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="w-[50%] max-lg:w-full my-2 p-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Text Area"
              className="w-full p-2 rounded-border5 bg-mainBgColor text-leftTextColorWhite"
            ></textarea>
          </div>
          <div className="w-[50%] max-lg:w-full my-2 p-2">
            <button className="w-full p-2 rounded-border5 bg-leftTextColorGreen">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 ">
        <div className="bg-leftBgOne border border-leftTextColorGreen flex justify-between  rounded-border5 p-2">
          <div className="text-leftTextColorGray max-sm:text-8">
            C 2024 all right reseerved
          </div>
          <div className="text-leftTextColorGray max-sm:text-8">
            Made with by Tharlan
          </div>
          <div className="text-leftTextColorGray max-sm:text-8 flex items-center gap-2">
            <SiGmail />
            sireliyevterlan95@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
