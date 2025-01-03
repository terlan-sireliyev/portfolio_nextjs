import React from "react";
import styles from "./centerSide.module.css";

const SlidingTextAnimation = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={`${styles.sliderText} max-sm2:text-12`}>
        <span>1. Məqsədlə kodlaşdırma, ürəklə dizayn etmək</span>
        <span>2. Qarışıqlıq proqramlaşdırmanın bir hissəsidir</span>
        <span>
          3. Məqsədlə kodlaşdırma, ürəklə dizayn etmək.
        </span>
      </div>
    </div>
  );
};

export default SlidingTextAnimation;
