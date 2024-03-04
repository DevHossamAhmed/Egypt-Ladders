"use client"

import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./slide.module.css";
import "@splidejs/splide/dist/css/splide.min.css";

const Slide = () => {
 



  return (
    <div>
      <Splide>
        <SplideSlide className={styles.item1}></SplideSlide>
        <SplideSlide className={styles.item2}></SplideSlide>
        <SplideSlide className={styles.item3}></SplideSlide>
        <SplideSlide className={styles.item4}></SplideSlide>
        <SplideSlide className={styles.item5}></SplideSlide>
      </Splide>
    </div>
  );
};

export default Slide;
