"use client";

import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./style.module.css";
import Link from "next/link";
import { NAV_LINKS } from "../right/navbar/navbar_mock";
import LeftSide from "../left/leftSide/index";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-leftBgOne relative text-leftTextColorGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
        <div className="text-lineProgressColor cursor-pointer relative">
          <MoreVertIcon
            onClick={toggleMenu}
            className={`${styles.animationMobilHamburger}`}
            style={{
              fontSize: "30px",
              border: "1px solid #1FDF64",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
        </div>

        <div className="w-full">
          <ul className="flex justify-center items-center gap-4">
            {NAV_LINKS.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={` top-0 z-50 left-0    w-[60%] max-sm:w-[80%] transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0 fixed" : "-translate-x-full fixed"
            }`}
        >
          <LeftSide toggleMenu={toggleMenu} />

        </div>

        <div onClick={toggleMenu} className={`fixed top-0 left-0 z-40  bg-transparent w-[100%] h-screen transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0 " : "-translate-x-full "
          }`}>asdasd</div>
      </div>
    </>
  );
};

export default MobileNavbar;
