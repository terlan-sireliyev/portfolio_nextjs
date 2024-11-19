"use client"; // Required because the component uses dynamic props

import React from "react";

const index = ({ title }) => {
  return (
    <>
      <div className="">
        <div className="shadow-md hover:shadow-lineProgressColor hover:transition-all !duration-200 hover:scale-[1.01] ease-linear text-sm p-2 bg-leftBgOne rounded-leftMainBorder text-leftTextColorGray font-normal overflow-hidden">
          <div className="p-6 text-14 m-auto">
            <p className="text-leftTextColorWhite font-bold my-2">
              Mern Stack Developer
            </p>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
