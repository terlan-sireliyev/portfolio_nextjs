"use client";
import CircleStyle from "./circle.module.css";
const Index = ({ radius, percentage, circumference, dashOffset, color }) => {
  return (
    <>
      <div className={CircleStyle.progress}>
        <div>
          <span className={CircleStyle.num}>{percentage}%</span>
          <svg width={150} height={150} className={CircleStyle.circle}>
            <circle
              cx={125}
              cy={25}
              r={radius}
              stroke={color}
              strokeWidth={5}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Index;
