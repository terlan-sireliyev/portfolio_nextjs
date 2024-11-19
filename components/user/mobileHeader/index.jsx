"use client";

import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./style.module.css";
import Link from "next/link";
import { NAV_LINKS } from "../right/navbar/navbar_mock";

const index = () => {
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
              <li key={item.id}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
