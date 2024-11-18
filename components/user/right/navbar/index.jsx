"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { ImHome } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";

import Link from "next/link";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="text-leftTextColorWhite">
        <div
          onClick={toggleMenu}
          className={`bg-leftBgOne rounded-t-leftMainBorder flex justify-center cursor-pointer px-2 py-3 text-lineProgressColor`}
        >
          <MenuIcon
            className={`${styles.ScaleDeskHamburger}`}
            style={{
              fontSize: "40px",
              border: "1px solid #1FDF64",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
        </div>

        <>
          <div
            onClick={toggleMenu}
            className={`absolute top-0 left-0 w-full h-full z-20 bg-mainBgColor opacity-50 ${
              menuOpen ? "" : "invisible pointer-events-none"
            }`}
          ></div>
          <div
            className={`${styles.menu} ${
              menuOpen ? styles.open : ""
            } z-30 overflow-hidden rounded-b-border5 rounded-t-border5`}
          >
            <div className="bg-[#333] rounded-t-border5">
              <button onClick={toggleMenu} className={` ${styles.close}`}>
                <CloseIcon style={{ fontSize: "24px" }} />
              </button>
            </div>
            <div className=" h-[100%] flex justify-start pl-4 items-center">
              <ul className="flex flex-col gap-4">
                <li className="font-bold hover:bg-[#333] hover:px-2 hover:rounded-border5 hover:transition duration-150" onClick={() => setMenuOpen(false)}>
                  <Link href="/" className="flex gap-3 items-center " >
                    <p className="mt-[-2px]">
                      <ImHome />
                    </p>
                    <p className="text-13"> Home</p>
                  </Link>
                </li>
                <li className="font-bold hover:bg-[#333] hover:px-2 hover:rounded-border5 hover:transition duration-150" onClick={() => setMenuOpen(false)}>
                  <Link href="/contact" className="flex gap-3 items-center ">
                    <p className="mt-[-2px]">
                      <MdContactPhone />
                    </p>
                    <p className="text-13">Contact</p>
                  </Link>
                </li>
                <li className="font-bold hover:bg-[#333] hover:px-2 hover:rounded-border5 hover:transition duration-150" onClick={() => setMenuOpen(false)}>
                  <Link href="/portfolio" className="flex gap-3 items-center ">
                    <p className="mt-[-2px]">
                      <RiProjectorFill />
                    </p>
                    <p className="text-13">Portfolio</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>

        <div
          style={{ writingMode: "vertical-rl" }}
          className="mt-[-55px] text-navbarTextColor text-15 font-bold flex justify-center items-center w-full h-full"
        >
          Navbar
        </div>
      </div>
    </>
  );
};

export default Navbar;
