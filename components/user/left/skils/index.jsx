import React from "react";

const index = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 p-2">
        <span className="text-leftTextColorWhite text-10 max-lg:ml-[12px] font-bold">
          Tools
        </span>
        <div className="flex flex-wrap gap-2 pl-[8px] ">
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            HTML
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            CSS
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            SASS&SCSS
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            Tailwind.css
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            Material UI
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            JavaScript
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            React.js
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            Next.js
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            TypeScript
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            Node.js and Express.js
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            Zustand
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            Redux toolkit
          </span>
          <span className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
            GitHub
          </span>
        </div>
      </div>
    </>
  );
};

export default index;
