"use client"; // This makes it a client component

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterTextSlide = () => {
  //bg-leftTextColorRed
  return (
    <>
      <h1 className="text-3  max-sm2:text-15 font-bold max-sm:text-2">
      {/* Kod vasitəsilə bizneslərin gücləndirilməsi! */}
      İdeyaları reallığa çevirək!
      </h1>
      <h1 className="bg-red-500 mt-2 max-sm2:text-12">
        <span className="font-bold">
          <span className="font-bold">{"<"}</span>
          <span className="text-lineProgressColor font-bold">div</span>
          <span className="font-bold">{">"}</span>
           
        </span>
        <span className="z-40 ml-2 max-sm2:text-12 text-lineProgressColor">
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={[
              "Web saytların hazırlanması",
              "Blog saytlarının hazırlanması",
            ]}
          />
        </span>
        <span className="font-bold">{"</"}</span>
        <span className="text-lineProgressColor font-bold">div</span>
        <span className="font-bold">{">"}</span>
      </h1>
    </>
  );
};

export default TypewriterTextSlide;
