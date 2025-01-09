import React from "react";
import { Skills } from "./skilsMock";
const index = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 p-2 ">
        <span className="text-leftTextColorWhite ml-[17px] text-14 max-lg:ml-[12px] font-bold">
          Alətlər
        </span>
        <div className="flex flex-wrap gap-2 pl-[8px] ">

          {
            Skills.map((item) => (
              <span key={item.id} className="py-2 px-3 bg-leftBgOne rounded-toolsBorder text-leftTextColorWhite text-12 cursor-pointer">
                {item.title}
              </span>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default index;
