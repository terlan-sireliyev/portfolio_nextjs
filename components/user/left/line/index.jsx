"use client";
import styleLine from "./line.module.css";
const index = ({ filled, title, color }) => {
  return (
    <>
      <div className="mt-4 px-2">
        <div className="flex justify-between px-2">
          <span className="text-leftTextColorGray text-10">{title}</span>
          <span
            className={`text-leftTextColorGray text-10m${styleLine.progressPrecent}`}
          >
            {filled}%
          </span>
        </div>
        <div className={styleLine.progressLine}>
          <div
            style={{
              height: "10px",
              width: `${filled}%`,
              backgroundColor: `${color}`,
              transition: "width 0.5s",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default index;
