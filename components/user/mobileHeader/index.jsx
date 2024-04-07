import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./style.module.css";
const index = () => {
  return (
    <>
      <div className=" bg-leftBgOne text-leftTextColorGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
        <div className="text-lineProgressColor cursor-pointer">
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
        <div className="text-lineProgressColor cursor-pointer">
          <MenuIcon
            className={`${styles.animationMobilHamburger}`}
            style={{
              fontSize: "30px",
              border: "1px solid #1FDF64",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default index;
