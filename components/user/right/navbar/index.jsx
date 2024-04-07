"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styes from "./styles.module.css";
const index = () => {
  return (
    <>
      <div className="text-leftTextColorWhite">
        <div
          className={`bg-leftBgOne rounded-t-leftMainBorder flex justify-center cursor-pointer px-2 py-3 text-lineProgressColor `}
        >
          <MenuIcon
            className={`${styes.ScaleDeskHamburger}`}
            style={{
              fontSize: "40px",
              border: "1px solid #1FDF64",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
        </div>
        <div
          style={{ writingMode: "vertical-rl" }}
          className=" mt-[-55px] text-navbarTextColor text-15 font-bold flex justify-center items-center w-full h-full"
        >
          Navbar
        </div>
      </div>
    </>
  );
};

export default index;
