import React from "react";

const Index = () => {
  return (
    <div className="relative">
      <div
        className="absolute  bg-cover bg-center blur-sm h-[300px] w-[100%]"
        style={{ backgroundImage: "url(img/img2.png)" }}
      ></div>
      <div className="absolute left-0 inset-40 flex justify-center items-center">
        <div className=" text-leftTextColorWhite text-left z-20">
          <h1 className="text-3 font-bold">Hello, Check this out!</h1>
          <p className="text-15">I am a MERN developer</p>
        <div><button className="py-2 px-10 mt-4 rounded-leftMainBorder bg-lineProgressColor">Explore</button></div>
        </div>
      </div>
        <div className="absolute inset-y-[105px] right-0  h-[200px] w-[200px] "><img src="img/emoji.png" alt="" className="w-full"/></div>
    </div>
  );
};

export default Index;
