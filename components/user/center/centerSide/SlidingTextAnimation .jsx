"use client";
import React from "react";
import styles from "./centerSide.module.css";

const SlidingTextAnimation = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderText}>
        <span>1. Təcrübə hər kəsin öz səhvlərinə verdiyi addır</span>
        <span>2. Qarışıqlıq proqramlaşdırmanın bir hissəsidir</span>
        <span>
          3. <b>&quot;Kopyala-yapışdır&quot;</b> əslində proqramçılar üçün
          proqramçılar tərəfindən proqramlaşdırılmışdır.
        </span>
      </div>
    </div>
  );
};

export default SlidingTextAnimation;
