"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./style.module.css";
import Link from "next/link";
import { NAV_LINKS } from "../right/navbar/navbar_mock";
// import Mobil_Navbar from "../right/navbar/Mobil_Navbar";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="bg-leftBgOne text-leftTextColorGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
        <div className="text-lineProgressColor cursor-pointer relative">
          <MoreVertIcon
            className={`${styles.animationMobilHamburger}`}
            style={{
              fontSize: "30px",
              border: "1px solid #1FDF64",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
        </div>
        <div className=" w-full">
          <ul className="flex justify-center items-center gap-4">
            {NAV_LINKS.map((item) => (
              <li>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="text-lineProgressColor cursor-pointer">
          <MenuIcon
            onClick={toggleMenu}
            className={`${styles.animationMobilHamburger}`}
            style={{
              fontSize: "30px",
              border: "1px solid #1FDF64",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
        </div> */}
      </div>
    </>
  );
};

export default index;
